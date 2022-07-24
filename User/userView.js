import { renderListElements,firstLetterCapitilize } from "../functions.js"

export function createUserProfile(user,posts,albums){
    let userContainer = document.querySelector('.user-wrapper')
        userContainer.innerHTML = ` 
        <strong>Name:</strong> ${user.name}
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
        <p><strong>City:</strong>${user.address.city}</p>
        <p><strong>Street:</strong>${user.address.street}</p>
        <p><strong>House number:</strong>${user.address.suite}</p>
        <p><strong>Zipcode:</strong>${user.address.zipcode}</p>
        <p><a href="callto:${user.phone}"><strong>Number:${user.phone}</strong></a>
        <p><a href=https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},14z><strong>Locstorng></a></p>
        <p><strong>Website: </strong>${user.website}</p>
        <p><strong>Company: </strong>${user.company.name}<p>
        <p><strong>Companies saying: ${user.company.bs}</strong></p>
        <button onclick="window.location='../editUser.html?userId=${user.id}'">Edit User</button>
        `
   
    let postsContainer = document.querySelector('.posts')
    renderListElements({
        element: 'h1',
        information: 'Posts:',
        parentElement:postsContainer
        })
    posts.map(post=>{
            let title = firstLetterCapitilize(post.title)
            postsContainer.innerHTML += `
            <h2><a href="post.html?postId=${post.id}">${title}</a></h2>
            <p>${post.body}</p>`
    })
    
    let albums_Name = document.querySelector('.albums')
    let album_item = document.querySelector('.album-item')
    renderListElements({
            element:'h1',
            information:'Albums:',
            parentElement:album_item
        })

        albums.map(album=>{
            let albumTitle = firstLetterCapitilize(album.title);
            albums_Name.innerHTML += `
            <ul><li><a href="./album.html?albumId=${album.id}">${albumTitle}`
        })
                                
}