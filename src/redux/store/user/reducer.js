import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "./actions";

const defaultState = {
    users: [],
    status: false,
    error: null,
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return {...state, status: false}
        case FETCH_USERS_SUCCESS:
            return {...state, status: true, users: [...state.users, ...action.payload]}
        case FETCH_USERS_FAILURE:
            return {...state, status: true, error: action.payload.error}
        default:
            return state;
    }
}
