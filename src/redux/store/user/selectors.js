export const all = state => state.users;

export const users = state => all(state).users;

export const currentUser = state => all(state).currentUser;

export const status = state => all(state).status;

export const error = state => all(state).error;