let nam = document.querySelector('.full-name');
let nickname = document.querySelector('.nick-name');
let email = document.querySelector('.email');
let adress = document.querySelector('.adress');
let number = document.querySelector('.number');
let website = document.querySelector('.website');
let company = document.querySelector('.company')

let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('userId')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.json()).then(user=>{
    nam.textContent = user.name;
    nickname.innerHTML = `Username: (<strong>${user.username}</strong>)`
    email.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`
    adress.innerHTML = `<div class="container">
                            <div class="user-wrapper">
                                <p><strong>City:</strong>${user.address.city}</p>
                                <p><strong>Street:</strong>${user.address.street}</p>
                                <p><strong>House number:</strong>${user.address.suite}</p>
                                <p><strong>Zipcode:</strong>${user.address.zipcode}</p>
                                <p><a href="callto:${user.phone}"><strong>Number:${user.phone}</strong></a>
                                <p><a href=https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},14z><strong>Location</storng></a></p>
                                <p><strong>Website: </strong>${user.website}</p>
                                <p><strong>Company: </strong>${user.company.name}<p>
                                <p><strong>${user.company.bs}</strong></p>
                            </div>
                        </div>
    `                       
})

let post_handler = document.querySelector('.posts');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(res=>res.json()).then(posts=>{
    let post_container_name = document.createElement('h1');
    post_container_name.textContent = 'Posts:'

    post_handler.append(post_container_name)
    posts.map(post=>{
        post_handler.innerHTML += `
                    <h2><a href=".">${post.title}</a></h2>
                    <p>${post.body}</p>
             
        `
    })
})

let albums_Name = document.querySelector('.albums-name')
let album_item = document.querySelector('.album-item')
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).then(res=>res.json()).then(albums=>{
    let albums_container_title = document.createElement('h1');
    albums_container_title.textContent = 'Albums:'

    album_item.prepend(albums_container_title);
    albums.map(album=>{
        albums_Name.innerHTML += `
        <ul><li><a href="./albums.html">${album.title}
`
    })
})
