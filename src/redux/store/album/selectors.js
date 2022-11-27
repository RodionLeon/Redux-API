export const all = state => state.albums;

export const albums = state => all(state).albums;

export const status = state => all(state).status;

export const error = state => all(state).error;
