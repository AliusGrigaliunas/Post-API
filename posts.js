let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

console.log(userId);

// let fetchUrl = 'https://jsonplaceholder.typicode.com/posts';

// if (userId) {
//   fetchUrl = 'https://jsonplaceholder.typicode.com/users/' + userId + '/posts';
// }

// fetch(fetchUrl)
//   .then(res => res.json())
//   .then(posts => {
//     console.log(posts);
//   })

let postsWrapper = document.querySelector('#posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');

postsWrapper.append(postsListTitle, postsList);

// if (userId) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     .then(res => res.json())
//     .then(posts => {
//       fetch('https://jsonplaceholder.typicode.com/users/' + userId)
//         .then(res => res.json())
//         .then(user => {
//           postsListTitle.textContent = `Posts of ${user.name}:`;
//           posts.map(post => {
//             let postItem = document.createElement('li');
//             postItem.innerHTML = `<a href="./post.html?postId=${post.id}">${post.title}</a>`;

//             postsList.prepend(postItem);
//           })
//         })
//     })
// else {
  // postsWrapper.style.display = 'none';
  // let loadingText = document.createElement('div');
  // loadingText.innerHTML = `<h1>Loading<h1>`;
  // async function getUsersPosts(){
  //   postsWrapper.style.display = 'none';
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(posts => {
  //     postsListTitle.textContent = 'All Posts:';

  //     posts.map(post => {
  //       fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
  //         .then(res => res.json())
  //         .then(user => {
  //           let postItem = document.createElement('li');
  //           postItem.innerHTML = `<a href="./post.html?postId=${post.id}">${post.title} (${user.name})</a>`;
  //           postsList.prepend(postItem);
  //         })
  //     })
  //   })
  //   return response;
  // }

  // getUsersPosts()

  // postsList.style.display = 'none'


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      postsListTitle.textContent = 'All Posts:';
      posts.map(post => {
        fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
          .then(res => res.json())
          .then(user => {
            let postItem = document.createElement('li');
            postItem.innerHTML = `<a href="./post.html?postId=${post.id}">${post.title} (${user.name})</a>`;
            postsList.prepend(postItem);
          })
      })
    })
    

