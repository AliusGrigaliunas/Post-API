let container = document.querySelector('.container');

let loading = document.createElement('h1');
let loadBox = document.querySelector('.loading');

loading.textContent = 'Loading...'

loadBox.append(loading);
let posts_html_link = document.createElement('a');
posts_html_link.href = './posts.html?variable=0';
posts_html_link.textContent = 'Kiti autoriaus įrašai'

fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res=>res.json()).then(data=>{
    data.map((post)=>{
        let div = document.createElement('div');
        div.setAttribute('style','border:1px solid black');

        let post_title = document.createElement('h1');
        let a = document.createElement('a');
        a.textContent =  post.title;
        a.href = `post.html?postId=${post.id}`
        post_title.append(a);

        let post_description = document.createElement('p');
        post_description.textContent = post.body

        let comment_item = document.createElement('div')

        let post_link = document.createElement('a');
        post_link.href = `./post.html?postId=${post.userId}`

        let button = document.createElement('button')

        fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).then(res=>res.json()).then(user=>{
            post_link.href = '.';
            post_link.textContent = user.name;
        })

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`).then(res=>res.json()).then(comments=>{
            comments.map(comment=>{
                comment_item.innerHTML += ` <div class="comment-item">
                                            <fieldset>
                                            <legend>Comment</legend>
                                            <h3>${comment.name}</h3>
                                            <span>Comment made by: ${comment.email}</span>
                                            <p>${comment.body}</p>
                                            </fieldset>
                                            </div class="comment-item">
                                            `
                                            
            })
        })

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
        div.append(post_title,post_description,post_link,button,comment_item,posts_html_link)
        container.append(div);
    })
    loading.style.display = 'none'
})

function albumList(){
    let albumContainer = document.querySelector('.container_Photos')

    let NameContainer = document.querySelector('.albums-name');
    let albumName = document.createElement('a');

    let albumAuthor = document.querySelector('.albums-author');
    let albumPhoto = document.querySelector('.albums-pic');

    let title = document.createElement('h2');
    title.innerHTML = `AlbumList:`
    albumContainer.prepend(title)

    fetch('https://jsonplaceholder.typicode.com/albums?_limit=1').then(res => res.json()).then(albums=>{
        albums.map(album=>{
            albumName.textContent = 'Title:' + ' ' + album.title;
            albumName.href = 'album.html'

                fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`).then(res=>res.json()).then(userName=>{
                    albumAuthor.textContent = 'Albums author:' + ' ' + userName.name;

                        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`).then(res=>res.json()).then(photos=>{
                                albumPhoto.innerHTML = `<img src="${photos[0].thumbnailUrl}"></img>`
                })
            })
        })
        NameContainer.append(albumName)
    })
}


albumList()



