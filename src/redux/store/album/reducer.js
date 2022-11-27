import {FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS} from "./actions";

const defaultState = {
    albums: [],
    status: false,
    error: null,
}

export const albumReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_START:
            return {...state, status: false}
        case FETCH_ALBUMS_SUCCESS:
            return {...state, status: true, albums: [...state.albums, ...action.payload]}
        case FETCH_ALBUMS_FAILURE:
            return {...state, status: true, error: action.payload.error}
        default:
            return state;
    }
}