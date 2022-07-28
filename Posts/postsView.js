import {getPostByUserId,getAllPosts,getPostsByPages} from './postsCollector.js'
import {firstLetterCapitilize,getParamData,renderListElements} from '../functions.js'
import {paginationById,paginationForAll} from '../pages.js'

let postsWrapper = document.querySelector('#posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');
let paginationWrapper = document.createElement('div');
let paginationSelector = document.querySelector('#select');

postsWrapper.append(postsListTitle, postsList,paginationWrapper);

for(let i = 1;i<=5;i++){
  let select = document.createElement('option');
  select.textContent = i * 2;
  paginationSelector.append(select)
}


async function getUsersPosts(id){

 let user = await paginationById(id,paginationWrapper)

        postsListTitle.textContent = `Posts of ${user[0].user.name}:`;
        user.map(post => {
          console.log(post);
          let title = firstLetterCapitilize(post.title)
          let postData = {
            element: 'li',
            information: `<a href="./post.html?postId=${post.id}">${title}</a>`,
            parentElement: postsList
          }
          renderListElements(postData)
        })
}

paginationSelector.addEventListener('change',()=>{
  let oldURL = new URL(window.location.href);
  let selectOldURL = oldURL.searchParams;
  selectOldURL.set('limit',paginationSelector.value)
  let newURL = selectOldURL.toString();
  window.location.href =`posts.html?${newURL}`;
})

async function renderAllPost(){
    let data = await getAllPosts();
    let info = paginationForAll({
      data,
      paginationWrapper,
      name:'posts.html',
      limitNumber: 25
    });
    let {currrentPage,limit} = info;
    let posts = await getPostsByPages(currrentPage,limit)
    
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