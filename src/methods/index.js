export const getItemById = (data, id) => {
    return data.filter(item => item.id.toString() === id.toString())[0];
}

export const getAlbumPhotos = (photos, albumId) => {
    return photos.filter(photo => photo.albumId.toString() === albumId.toString());
}

export const getUserAlbums = (albums, userId) => {
    return albums.filter(album => album.userId.toString() === userId.toString());
}