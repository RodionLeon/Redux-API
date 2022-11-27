import * as userSelectors from "../../redux/store/user/selectors";
import * as albumSelectors from "../../redux/store/album/selectors";

import {fetchUsers} from "../../redux/store/user/actions";
import {fetchAlbums} from "../../redux/store/album/actions";
import {Link, useParams} from 'react-router-dom';

import {useSelector} from "react-redux";
import CustomRenderer from "../../components/CustomRenderer";
import {useMemo} from "react";
import {getItemById, getUserAlbums} from "../../methods";


export default function User() {
    const params = useParams();
    const users = useSelector(userSelectors.users);
    const albums = useSelector(albumSelectors.albums);

    const currentUser = useMemo(() => getItemById(users, params.id), [users, params.id]);
    const userAlbums = useMemo(() => getUserAlbums(albums, params.id), [albums, params.id]);

    return (
        <div>
            <CustomRenderer request={fetchUsers}
                            selector={userSelectors.all}
                            children={currentUser?.name}
            />
            <CustomRenderer request={fetchAlbums}
                            selector={albumSelectors.all}
                            children={userAlbums.map(album => <Link key={album.id} to={`/albums/${album.id}`}>
                                <div>{album.title}</div>
                            </Link>)}
            />
        </div>
    )
}