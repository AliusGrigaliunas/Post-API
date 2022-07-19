import {firstLetterCapitilize} from '../functions.js'
import {commentButton} from './postCommentButton.js'
function viewPost(posts){
    let container = document.querySelector('.container')
    
    posts.map(post=>{
        console.log(post);
        let title = firstLetterCapitilize(post.title);

        let div = document.createElement('div');
        div.setAttribute('style','border:1px solid black');

        div.innerHTML = `
        <h1>${title}</h1>
        <p>${post.body}</p>
        <a href="./user.html?userId=${post.userId}">${post.user.name}</a>`

        commentButton(post,div);

        container.append(div);
    })
}

export {viewPost}