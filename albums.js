function albumList(){
    let container = document.querySelector('.container')




    fetch('https://jsonplaceholder.typicode.com/albums?_limit=25').then(res => res.json()).then(albums=>{
        let albumlist = document.createElement('h1');
        albumlist.textContent = 'AlbumList:'
        container.prepend(albumlist)
        albums.map(album=>{
                fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`).then(res=>res.json()).then(userName=>{
                        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`).then(res=>res.json()).then(photos=>{
                                container.innerHTML += `
                                <h2>${album.title}</h2>
                                <p>Albums author: <a href='user.html?userId=${album.userId}'>${userName.name}</a></p>
                                <img src="${photos[0].thumbnailUrl}"></img>
                                `
                })
            })
        })

    })
}


albumList()