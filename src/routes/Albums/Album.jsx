import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import * as albumSelectors from "../../redux/store/album/selectors";
import * as userSelectors from "../../redux/store/user/selectors";
import {useMemo} from "react";
import {getAlbumPhotos, getItemById, getItemsById} from "../../methods";
import CustomRenderer from "../../components/CustomRenderer";
import {fetchUsers} from "../../redux/store/user/actions";
import {fetchAlbums} from "../../redux/store/album/actions";
import {fetchPhotos} from "../../redux/store/photo/actions";
import * as photosSelectors from "../../redux/store/photo/selectors";
import {useFetching} from "../../redux/hooks/useFetching";

export default function Album() {
    const params = useParams();
    const users = useSelector(userSelectors.users);
    const albums = useSelector(albumSelectors.albums);
    const photos = useSelector(photosSelectors.photos);

    const currentAlbum = useMemo(() => getItemById(albums, params.id), [albums, params.id]);
    const albumPhotos = useMemo(() => getAlbumPhotos(photos, params.id), [photos, params.id]);

    return (
        <div>
            <CustomRenderer
                request={fetchAlbums}
                selector={albumSelectors.all}
                children={currentAlbum?.title}
            />
            <CustomRenderer request={fetchPhotos} selector={photosSelectors.all} children={
                <div>
                    {albumPhotos.map(photo => (
                            <img key={photo.id} src={photo.thumbnailUrl} alt="just fake api photos, nothing else"/>
                    ))}
                </div>
            }/>
        </div>

    )
}