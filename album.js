let albumName = document.querySelector('.albums-name');
let albumAuthor = document.querySelector('.albums-author');
let albumPhoto = document.querySelector('.albums-pic');
let container = document.querySelector('.container')

let nam = document.createElement('h1');
let author = document.createElement('a');

fetch('https://jsonplaceholder.typicode.com/albums?_limit=1').then(res => res.json()).then(albums=>{
       albums.map(album=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`).then(res=>res.json()).then(user=>{
                container.innerHTML = `
                <h1>${album.title}</h1>
                <p><a href='user.html'>${user.name}<a></p>`
                fetch(`https://jsonplaceholder.typicode.com/albums/${album.userId}/photos?_limit=30`).then(res =>res.json()).then(fotos=>{
                    let fotowrapper = document.createElement('div');
                    container.append(fotowrapper)
                    fotos.map(foto=>{
                        console.log(foto);
                        fotowrapper.innerHTML += `<img src='${foto.thumbnailUrl}'></img>`
                    })
                })
            })

       })
})
