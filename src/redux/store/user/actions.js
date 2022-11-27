import {getUsers} from "../../../api/api";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());
    try {
        const users = await getUsers();
        dispatch(fetchUsersSuccess(users));
    } catch (err) {
        console.error(err);
        dispatch(fetchUsersFailure(err));
    }
}

export const fetchUsersStart = () => ({
    type: FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: {error},
})
