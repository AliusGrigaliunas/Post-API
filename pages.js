// import {getAllPosts} from './Posts/postsCollector.js'

// async function init(){
//         let res = await fetch('https://jsonplaceholder.typicode.com/posts?_expand=user');
//         let allPosts = await res.json();

//         let postsWrapper = document.querySelector('#posts-wrapper')

//         let postsTotalNumber = allPosts.length;

//         let pagesNumber = postsTotalNumber/25;

//         for(let i=1;pagesNumber>=i;i++){

//             let page = await getAllPosts(i);

//             let createPage = document.createElement('a');

//             createPage.href = `${page}`;
//             createPage.text = `${i}`;

//             postsWrapper.append(createPage);  
//         }
//         console.log(allPosts.length);

// }

// init();