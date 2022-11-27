import {BASE_URL} from "./constants";

const commonGet = (addressEnd) => {
    return fetch(BASE_URL + addressEnd).then(r => r.json());
}

export const getUsers = () => {
    return commonGet("/users");
}

export const getAlbums = () => {
    return commonGet("/albums");
}

export const getPhotos = () => {
    return commonGet("/photos");
}
