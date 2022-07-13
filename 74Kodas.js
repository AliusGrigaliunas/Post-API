let container = document.querySelector('.container');

let div = document.createElement('div');
div.setAttribute('style','border:1px solid black');
function init(){
    userPostList()
    albumList()
}
function userPostList(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2&_expand=user&_embed=comments').then(res=>res.json()).then(data=>{
        data.map((post)=>{
            let titleData = {
                element:'h1',
                information:   `<a href=post.html?postId=${post.id}>${post.title}</a>`,
            }
            renderElements(titleData)

            let descriptionData ={
                element: 'p',
                information: post.body
            }
            renderElements(descriptionData);

            let userData = {
                element: 'p',
                information: `<a href=./user.html?userId=${post.userId}>${post.user.name}</a>`
            }
            renderElements(userData)

            let comment_item = document.createElement('div')
            post.comments.map(comment=>{
                comment_item.innerHTML += ` 
                <div class="comment-item">
                <fieldset>
                <legend>Comment</legend>
                <h3>${comment.name}</h3>
                <span>Comment made by: ${comment.email}</span>
                <p>${comment.body}</p>
                </fieldset>
                </div class="comment-item">
                `
            })

            let button = document.createElement('button')

            button.textContent = 'Show Heaven'

            button.addEventListener('click',(event)=>{
                event.preventDefault();
                if(comment_item.style.display == 'none'){
                    comment_item.style.display = 'block';
                    button.textContent = 'Show heaven';
                }else {
                    comment_item.style.display = 'none';
                    button.textContent = 'Show hell';
                }
            })
            div.append(button,comment_item)
            container.append(div);
        })
    })
}
function albumList(){
    let albumContainer = document.querySelector('.container_Photos')

    let title = document.createElement('h2');
    title.innerHTML = `AlbumList:`
    albumContainer.prepend(title)

    fetch('https://jsonplaceholder.typicode.com/albums?_limit=20&_embed=photos&_expand=user').then(res => res.json()).then(albums=>{
        albums.map(album=>{
            albumContainer.innerHTML += `
                                        <h2><a href=album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a></h2>
                                        <p>Album author:<a href=user.html?userId=${album.userId}>${album.user.name}</a></p>
                                        <img src="${album.photos[0].thumbnailUrl}">`
        })
    })
}
function renderElements(data){
    let DOMElement = document.createElement(data.element);
    DOMElement.innerHTML = data.information;
    div.append(DOMElement);
}

init();


