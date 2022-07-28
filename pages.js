import { getParamData } from "./functions.js";
import {getPostByUserId} from './Posts/postsCollector.js'
async function paginationById(id,paginationWrapper){
    let data = await getPostByUserId(id,10);
    let postsTotalNumber = data.length;

    let limit;

    getParamData('limit') ? limit =  getParamData('limit'): limit = 5;

    let currrentPage = getParamData('page');
    let pagesNumber = postsTotalNumber/limit;
    
    let user = await getPostByUserId(id,limit,currrentPage);

if(limit <= 9){
  let firstPage = ''
  

  if(Number(currrentPage) !== 1){
    firstPage = document.createElement('a');
    firstPage.href = `posts.html?userId=${id}&page=1&limit=${limit}`;
    firstPage.textContent = 'First';
  }

  let lastPage = ''

  if(Number(currrentPage) !== pagesNumber){
    lastPage = document.createElement('a');
    lastPage.textContent = 'Last'
    lastPage.href = `posts.html?userId=${id}&page=${pagesNumber}&limit=${limit}`
  }

  let backwardPage;
  let forwardPage;
  if(currrentPage == pagesNumber){
    forwardPage = document.createElement('span');
  }else{
    forwardPage = document.createElement('a');
    forwardPage.textContent = 'Next';
    forwardPage.href = `posts.html?userId=${id}&page=${Number(currrentPage)+1}&limit=${limit}`
  }
  if(currrentPage < pagesNumber){
    backwardPage = document.createElement('span')
  }else{
    backwardPage = document.createElement('a');
    backwardPage.textContent = 'Prev';
    backwardPage.href = `posts.html?userId=${id}&page=${Number(currrentPage)-1}&limit=${limit}`
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
      createPage.href = `posts.html?userId=${id}&page=${i}&limit=${limit}`;
    }

    createPage.textContent = `${i}`;

    paginationWrapper.append(createPage,backwardPage,lastPage);  
}
}else{
  paginationWrapper.remove();
}

return user;

}
async function paginationForAll(obj){
    let {data,paginationWrapper,name,limitNumber} = obj
    let postsTotalNumber = data.length;

    let limit;

    getParamData('limit') ? limit =  getParamData('limit'): limit = limitNumber;

  console.log(limit);

    let currrentPage = getParamData('page');
    let pagesNumber = postsTotalNumber/limit;


  let firstPage = ''
  

  if(Number(currrentPage) !== 1){
    firstPage = document.createElement('a');
    firstPage.href = `${name}?page=1`;
    firstPage.textContent = 'First';
  }

  let lastPage = ''

  if(Number(currrentPage) !== pagesNumber){
    lastPage = document.createElement('a');
    lastPage.textContent = 'Last'
    lastPage.href = `${name}?page=${pagesNumber}&?limit=${limit}`
  }

  let backwardPage;
  let forwardPage;
  if(currrentPage == pagesNumber){
    forwardPage = document.createElement('span');
  }else{
    forwardPage = document.createElement('a');
    forwardPage.textContent = 'Next';
    forwardPage.href = `${name}?page=${Number(currrentPage)+1}&limit=${limit}`
  }
  if(currrentPage >= pagesNumber){
    backwardPage = document.createElement('span')
  }else{
    backwardPage = document.createElement('a');
    backwardPage.textContent = 'Prev';
    backwardPage.href = `${name}?page=${Number(currrentPage)-1}&limit=${limit}`
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
      createPage.href = `${name}?page=${i}&limit=${limit}`;
    }

    createPage.textContent = `${i}`;

    paginationWrapper.append(createPage,backwardPage,lastPage);  

}

return {limit,currrentPage};
}

export {
    paginationById,
    paginationForAll
}