import {firstLetterCapitilize} from './functions.js'

let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('postId')

console.log(userId);
let container = document.querySelector('.container')


fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(res=>res.json()).then(post=>{
        let div = document.createElement('div');
        div.setAttribute('style','border:1px solid black');

        let title = firstLetterCapitilize(post.title);

        let post_title = document.createElement('h1');
        post_title.textContent =  title;


        let post_description = document.createElement('p');
        post_description.textContent = post.body

        
        let comment_item = document.createElement('div')

        let post_link = document.createElement('a');

        let button = document.createElement('p')

        fetch('https://jsonplaceholder.typicode.com/users/' +post.userId).then(res=>res.json()).then(user=>{
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
        comment_item.style.display = 'none';
        button.innerHTML = `<button>Show hell</button>`

        button.addEventListener('click',(event)=>{
            event.preventDefault();
            if(comment_item.style.display == 'none'){
                comment_item.style.display = 'block';
                button.innerHTML = `<button>Show Heaven</button>`;
            }else {
                comment_item.style.display = 'none';
                button.innerHTML = `<button>Show hell</button>`;
            }
        })

        div.append(post_title,post_description,post_link,button,comment_item)
        container.append(div);
})