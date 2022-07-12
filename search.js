const urlParam = document.location.search
const param = new URLSearchParams(urlParam);
const results = param.get('search-input')

let text = document.querySelector('.answer');

let text_posts = document.createElement('div');
let profileText = document.createElement('div');
let albumsText = document.createElement('div');

document.body.append(profileText,text_posts,albumsText);

profileText.innerHTML = `<h1>Users:</h1>`
text_posts.innerHTML = `<h1>Posts:</h1>`
albumsText.innerHTML =`<h1>Albums:</h1>`


if(results == ''){}
else{
    fetch(`https://jsonplaceholder.typicode.com/users?username_like=${results}`).then(res=>res.json()).then(username=>{
    console.log(username);
    if(username[0]){
        profile(username)
    }else{
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${results}`).then(res=>res.json()).then(Name=>{
            console.log(Name);
            if(Name[0]){
                profile(Name)
            }
            else{
                fetch(`https://jsonplaceholder.typicode.com/users?email_like=${results}`).then(res=>res.json()).then(email=>{
                    console.log(email);
                    if(email[0]){
                        profile(email)
                    }else{
                        text.innerHTML = `<div>Nerasta</div>`
                    }
                })
            }
        })
    }
})

    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${results}`).then(res=>res.json()).then(titles=>{
        titles.map(post=>{
            let li = document.createElement('li');
            li.innerHTML = `<a href=./post.html?userId=${post.id}>${post.title}</a>`;
            text_posts.append(li);
        })
})
    fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${results}`).then(res=>res.json()).then    (albums=>{
    albums.map(album=>{
        let li = document.createElement('li');
        li.innerHTML = `<a href=./album.html?userId=${album.id}>${album.title}</a>`;
        albumsText.append(li);
    })
})


}



let searchPageForm = document.querySelector('#search-page-form');

searchPageForm.addEventListener('submit', (event) => {
  event.preventDefault();


  let searchInput = event.target.elements['search-input'].value;

  fetch(`https://jsonplaceholder.typicode.com/users?username_like=${searchInput}`)
    .then(res => res.json())
    .then(users => {
      if (users.length > 0) {
        profileText.textContent = 'Users:'

        users.map(user => {
          let userItem = document.createElement('li');
          userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;

          profileText.append(userItem);
        })
      } else {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
          .then(res => res.json())
          .then(usersByName => {
            if (usersByName.length > 0) {
                profileText.textContent = 'Users:'
        
              usersByName.map(user => {
                let userItem = document.createElement('li');
                userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        
                usersList.append(userItem);
              })
            } else {
              fetch(`https://jsonplaceholder.typicode.com/users?email_like=${searchInput}`)
                .then(res => res.json())
                .then(usersByEmail => {
                  if (usersByEmail.length > 0) {
                    usersListTitle.textContent = 'Users:'
              
                    usersByEmail.map(user => {
                      let userItem = document.createElement('li');
                      userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
              
                      usersList.append(userItem);
                    })
                  } else {
                    usersListTitle.textContent = 'Users not found.'
                  }
                })
            } 
          })
      }
  })
})


function profile(info){
    info.map(singleInfo=>{
        let li = document.createElement('li');
        li.innerHTML = `<a href=./user.html?userId=${singleInfo.id}>${singleInfo.name}</a>`;
        profileText.append(li)                     
    })                
}