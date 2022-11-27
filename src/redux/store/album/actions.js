import {getAlbums} from "../../../api/api";

export const FETCH_ALBUMS_START = "FETCH_ALBUMS_START";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const fetchAlbums = () => async (dispatch) => {
    dispatch(fetchAlbumsStart());
    try {
        const albums = await getAlbums();
        dispatch(fetchAlbumsSuccess(albums));
    } catch (err) {
        console.error(err);
        dispatch(fetchAlbumsFailure(err));
    }
}

export const fetchAlbumsStart = () => ({type: FETCH_ALBUMS_START});
export const fetchAlbumsSuccess = (albums) => ({type: FETCH_ALBUMS_SUCCESS, payload: albums});
export const fetchAlbumsFailure = (error) => ({type: FETCH_ALBUMS_FAILURE, payload: error});