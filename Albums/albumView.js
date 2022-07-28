import {firstLetterCapitilize} from '../functions.js'

async function AlbumsList(data){
    let {albumsData, wrapperSelector,allAlbums} = data;

    let albumContainer = document.querySelector(wrapperSelector);

    if(allAlbums){
        albumContainer.innerHTML = `<h2>All Albums:</h2>`;
    }
    else{
        albumContainer.innerHTML = `<h2>Albums made by ${albumsData[0].user.name}</h2>`
    }

        albumsData.map(album=>{

            let createdBy = '';

            if(allAlbums){
                createdBy = `<p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>`
            }
            let title = firstLetterCapitilize(album.title)
            albumContainer.innerHTML += `
            <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${title}</a></h2>
            ${createdBy}
            <img src="${album.photos[0].thumbnailUrl}">`
        })
}
export {AlbumsList};