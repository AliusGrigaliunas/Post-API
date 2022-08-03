import {firstLetterCapitilize,renderListElements} from '../functions.js'

let loadingbox = document.querySelector('.loading');
loadingbox.textContent = 'Loading...';

export default function indexPostViewer(posts) {

    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.setAttribute('style','border:1px solid black');

    container.style.display = 'none'

    posts.map(post=>{
        let comment_item = document.createElement('div')
        let title = firstLetterCapitilize(post.title);
        
        let titleData = {
            element:'h1',
            information:   `<a href=post.html?postId=${post.id}>${title}</a>`,
            parentElement: div
        }
        renderListElements(titleData)
        let descriptionData ={
            element: 'p',
            information: post.body,
            parentElement: div
        }
        renderListElements(descriptionData);
        let userData = {
            element: 'p',
            information: `<a href=./user.html?userId=${post.userId}>${post.user.name}</a>`,
            parentElement: div
        }
        renderListElements(userData)
    
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
        comment_item.style.display  = 'none'
        
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
        container.append(loadingbox,div);

        loadingbox.style.display = 'none';
        container.style.display = 'block'
        })
}
