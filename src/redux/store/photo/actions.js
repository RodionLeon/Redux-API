import {getPhotos} from "../../../api/api";

export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const fetchPhotos = () => async (dispatch) => {
    dispatch(fetchPhotosStart());
    try {
        const photos = await getPhotos();
        dispatch(fetchPhotosSuccess(photos));
    } catch (err) {
        console.error(err);
        dispatch(fetchPhotosFailure(err));
    }
}

export const fetchPhotosStart = () => ({type: FETCH_PHOTOS_START});
export const fetchPhotosSuccess = (photos) => ({type: FETCH_PHOTOS_SUCCESS, payload: photos});
export const fetchPhotosFailure = (error) => ({type: FETCH_PHOTOS_FAILURE, payload: error});