import {getPostByUserId,getAllPosts,getPostsByPages} from './postsCollector.js'
import {firstLetterCapitilize,getParamData,renderListElements} from '../functions.js'
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
    let data = await getAllPosts();
    let postsTotalNumber = data.length;
    let pagesNumber = postsTotalNumber/25;

    for(let i=1;pagesNumber>=i;i++){
      let createPage = document.createElement('a');

      createPage.href = `posts.html?number=${i}`;
      createPage.text = `${i}`;

      postsWrapper.append(createPage);  
  }

  let info = getParamData('number')
  let posts = await getPostsByPages(info);

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