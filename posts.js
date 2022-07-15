let postsWrapper = document.querySelector('#posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');

postsWrapper.append(postsListTitle, postsList);


function init(){
  let queryParams = document.location.search;
  let urlParams = new URLSearchParams(queryParams);
  let userId = urlParams.get('userId');
  if (userId) {
    getUsersPosts(userId)
  }else{
    renderAllPost()
  }
}


function getUsersPosts(id){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`)
  .then(res => res.json())
  .then(user => {
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
  })
}
function renderAllPost(){
  fetch('https://jsonplaceholder.typicode.com/posts?_expand=user')
  .then(res => res.json())
  .then(posts => {
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
  })
}

init();
    

