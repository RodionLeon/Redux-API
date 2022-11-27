import {FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS} from "./actions";

const defaultState = {
    photos: [],
    status: false,
    error: null,
}

export const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_START:
            return {...state, status: false}
        case FETCH_PHOTOS_SUCCESS:
            return {...state, status: true, photos: [...state.photos, ...action.payload]}
        case FETCH_PHOTOS_FAILURE:
            return {...state, status: true, error: action.payload.error}
        default:
            return state;
    }
}