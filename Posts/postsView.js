import {getPostByUserId,getAllPosts,getPostsByPages} from './postsCollector.js'
import {firstLetterCapitilize,getParamData,renderListElements} from '../functions.js'
let postsWrapper = document.querySelector('#posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');
let paginationWrapper = document.createElement('div')
let paginationSelector = document.querySelector('#select')
postsWrapper.append(postsListTitle, postsList,paginationWrapper);


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

paginationSelector.addEventListener('change',()=>{
  let oldURL = new URL(window.location.href);
  let selectOldURL = oldURL.searchParams;
  selectOldURL.set('limit',paginationSelector.value)
  let newURL = selectOldURL.toString();
  window.location.href =`posts.html?${newURL}`;
})

async function renderAllPost(){
    let data = await getAllPosts();
    let postsTotalNumber = data.length;

    let limit;

    getParamData('limit') ? limit =  getParamData('limit'): limit = 25;

    let currrentPage = getParamData('page');
    let pagesNumber = postsTotalNumber/limit;
    
    let posts = await getPostsByPages(currrentPage,limit);

if(limit <= 25){
  let firstPage = ''
  

  if(Number(currrentPage) !== 1){
    firstPage = document.createElement('a');
    firstPage.href = `posts.html?page=1`;
    firstPage.textContent = 'First';
  }

  let lastPage = ''

  if(Number(currrentPage) !== pagesNumber){
    lastPage = document.createElement('a');
    lastPage.textContent = 'Last'
    lastPage.href = `posts.html?page=${pagesNumber}&?limit=${limit}`
  }

  let backwardPage;
  let forwardPage;
  if(currrentPage == pagesNumber){
    forwardPage = document.createElement('span');
  }else{
    forwardPage = document.createElement('a');
    forwardPage.textContent = 'Next';
    forwardPage.href = `posts.html?page=${Number(currrentPage)+1}&limit=${limit}`
  }
  if(currrentPage >= pagesNumber){
    backwardPage = document.createElement('span')
  }else{
    backwardPage = document.createElement('a');
    backwardPage.textContent = 'Prev';
    backwardPage.href = `posts.html?page=${Number(currrentPage)-1}&limit=${limit}`
  }

  paginationWrapper.append(firstPage,forwardPage)

  for(let i=1;pagesNumber>=i;i++){

    let createPage;

    if(currrentPage == i){
      createPage = document.createElement('span')
    }
    else{
      createPage = document.createElement('a');
      createPage.classList.add('page');
      createPage.href = `posts.html?page=${i}&limit=${limit}`;
    }

    createPage.textContent = `${i}`;

    paginationWrapper.append(createPage,backwardPage,lastPage);  
}
}else{
  paginationWrapper.remove();
}
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