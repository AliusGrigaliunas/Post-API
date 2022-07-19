export default function indexAlbumViewer(albums){
    let albumContainer = document.querySelector('.container_Photos')

    let title = document.createElement('h2');
    title.innerHTML = `AlbumList:`;

    albumContainer.prepend(title)

        albums.map(album=>{
            albumContainer.innerHTML += `
                                        <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a></h2>
                                        <p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>
                                        <img src="${album.photos[0].thumbnailUrl}">`
        })
}