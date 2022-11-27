import * as albumSelectors from "../../redux/store/album/selectors";
import {Link} from "react-router-dom";
import {fetchAlbums} from "../../redux/store/album/actions";
import CustomRenderer from "../../components/CustomRenderer";
import {useSelector} from "react-redux";

export default function Albums() {
    const albums = useSelector(albumSelectors.albums);

    return (
        <CustomRenderer request={fetchAlbums} selector={albumSelectors.all} children={albums.map(album => (
            <Link key={album.id} to={`/albums/${album.id}`}>
                <div>{album.title}</div>
            </Link>
        ))}/>
    )
}
