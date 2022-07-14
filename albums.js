

function init(){
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let userId = urlParams.get('userId');
    if(userId){
        userAlbumList(id)
    }else{
        albumList()
    }
}
function albumList(){
    let albumContainer = document.querySelector('.container')

    let albumData = {
        element: 'h2',
        information:`AlbumList:`,
        parentElement: albumContainer
    }

    renderListElements(albumData)

    fetch('https://jsonplaceholder.typicode.com/albums?_limit=20&_embed=photos&_expand=user').then(res => res.json()).then(albums=>{
        albums.map(album=>{
            albumContainer.innerHTML += `
                                        <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a></h2>
                                        <p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>
                                        <img src="${album.photos[0].thumbnailUrl}">`
        })
    })
}
function userAlbumList(id) {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums?_embed=photos&_expand=user').then(res => res.json()).then(albums=>{
        albums.map(album=>{
            albumContainer.innerHTML += `
                                        <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a></h2>
                                        <p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>
                                        <img src="${album.photos[0].thumbnailUrl}">`
        })
    })
}
// function renderElements(data){
//     let DOMElement = document.createElement(data.element);
//     DOMElement.innerHTML = data.information;
//     data.parentElement.append(DOMElement);
// }

function renderSinlgeAlbum(){
    albumContainer.innerHTML += `
                                        <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a></h2>
                                        <p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>
                                        <img src="${album.photos[0].thumbnailUrl}">`
}

init();