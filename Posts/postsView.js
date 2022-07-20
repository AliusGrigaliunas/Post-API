import {getPostByUserId,getAllPosts} from './postsCollector.js'
import {firstLetterCapitilize,renderListElements} from '../functions.js'
let postsWrapper = document.querySelector('#posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');

postsWrapper.append(postsListTitle, postsList);


async function getUsersPosts(id){
    let user = await getPostByUserId(id);
        postsListTitle.textContent = `Posts of ${user.name}:`;
        user.posts.map(post => {
          let title = firstLetterCapitilize(post.title)
          let postData = {
            element: 'li',
            information: `<a href="./post.html?postId=${post.id}">${title}</a>`,
            parentElement: postsList
          }
          renderListElements(postData)
        })
}

async function renderAllPost(){
    let posts = await getAllPosts();
    postsListTitle.textContent = 'All Posts:';
    posts.map(post => {
        let title = firstLetterCapitilize(post.title)
          let postData = {
            element: 'li',
            information: `<a href="./post.html?postId=${post.id}">${title} (${post.user.name})</a>`,
            parentElement: postsList
          }
          renderListElements(postData)
    })
}

export{
    getUsersPosts,
    renderAllPost
}