export const all = state => state.photos;

export const photos = state => all(state).photos;

export const status = state => all(state).status;

export const error = state => all(state).error;
