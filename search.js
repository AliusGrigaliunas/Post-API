let userList = document.createElement('ul');
let userTitle = document.createElement('h3');
userTitle.textContent = 'Users:'
userTitle.append(userList)

let postList = document.createElement('ul');
let postTitle = document.createElement('h3');
postTitle.textContent = 'Posts:'
postTitle.append(postList);

let albumTitle = document.createElement('h3');
let Albumlist = document.createElement('ul');
albumTitle.textContent = 'Albums:';
albumTitle.append(Albumlist)

document.body.append(userTitle,postTitle,albumTitle);

function outerInput(){

    const urlParam = document.location.search
    const param = new URLSearchParams(urlParam);
    const results = param.get('search-input')

    let text = document.querySelector('.answer');

    if(results == ''){

    }
    else{

        renderAllUsers(results);

        let postsUrl = `?title_like=${results}`;
        renderAllPosts(postsUrl);

        let albumUrl = `?title_like=${results}`;
        renderAllAlbums(albumUrl);
        fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${results}`).then(res=>res.json()).then(albums=>{
            if(albums.length > 0){
                albums.map(album=>{
                    let li = document.createElement('li');
                    li.innerHTML = `<a href=./album.html?userId=${album.userId}&albumId=${album.id}>${album.title}</a>`;
                    Albumlist.append(li);
                })
            }
            else{
                Albumlist.innerHTML = `<p>Nerasta informacija</p>`
            }
    })
    }

}

function innerInput(){
    let searchPageForm = document.querySelector('#search-page-form');

    searchPageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    userList.innerHTML = '';
    postList.innerHTML = '';
    Albumlist.innerHTML = '';

    let results = event.target.elements['search-input'].value;

    fetch(`https://jsonplaceholder.typicode.com/users?username_like=${results}`).then(res=>res.json()).then(username=>{
        if(username[0]){
            username.map(user=>{
                renderListElement({
                    content:user.name,
                    url:`post.html?userId=${user.id}`,
                    parentElement: userList
                })
            })
        }
        else{
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${results}`).then(res=>res.json()).then(Name=>{
                if(Name[0]){
                    Name.map(userName=>{
                        renderListElement({
                            content:userName.name,
                            url:`post.html?userId=${userName.id}`,
                            parentElement: userList
                        })
                    })
                }
                else{
                    fetch(`https://jsonplaceholder.typicode.com/users?email_like=${results}`).then(res=>res.json()).then(email=>{
                        if(email[0]){
                            email.map(useremail=>{
                                let userData = {
                                    content: useremail.name,
                                    href: `post.html?userId=${useremail.id}`,
                                    parentElement: userList
                                }
                                renderListElement(userData)
                            })
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
            postList.append(li);

        })
})
    fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${results}`).then(res=>res.json()).then    (albums=>{
    albums.map(album=>{
        let li = document.createElement('li');
        li.innerHTML = `<a href=./album.html?userId=${album.id}>${album.title}</a>`;
        Albumlist.append(li);
    })
})

})
}


function RenderUser(info){
    info.map(singleInfo=>{
        let li = document.createElement('li');
        li.innerHTML = `<a href=./user.html?userId=${singleInfo.id}>${singleInfo.name}</a>`;
        userList.append(li)                     
    })                
}
function renderAllUsers(userData){
        fetch(`https://jsonplaceholder.typicode.com/users?username_like=${userData}`).then(res=>res.json()).then(username=>{
        if(username[0]){
            RenderUser(username)
        }else{
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${userData}`).then(res=>res.json()).then(Name=>{
                if(Name[0]){
                    RenderUser(Name)
                }else{
                    fetch(`https://jsonplaceholder.typicode.com/users?email_like=${userData}`).then(res=>res.json()).then(email=>{
                        console.log(email);
                        if(email[0]){
                            RenderUser(email)
                        }else{
                            userList.innerHTML = `<div>Nerasta informacija</div>`
                        }
                    })
                }
            })
        }
    })
    
}
function renderAllPosts(postData){
    fetch(`https://jsonplaceholder.typicode.com/posts${postData}`).then(res=>res.json()).then(titles=>{
        if(titles.length > 0){
            titles.map(post=>{
                let postData = {
                    content:post.title,
                    href:`post.html?userId=${post.id}`,
                    parentElement: postList
                }
                renderListElement(postData);
            })
        }
        else{
            postList.innerHTML = `<p>Nerasta informacija</p>`
        }
})
}
function renderAllAlbums(albumData){
    fetch(`https://jsonplaceholder.typicode.com/albums${albumData}`).then(res=>res.json()).then(albums=>{
        if(albums.length > 0){
            albums.map(album=>{
                let albumData = {
                    content:album.title,
                    href:`album.html?userId=${album.userId}&albumId=${album.id}`,
                    parentElement: Albumlist
                }
                renderListElement(albumData)
            })
        }
        else{
            Albumlist.innerHTML = `<p>Nerasta informacija</p>`
        }
})
}
function renderListElement(data){
    let li = document.createElement('li');
    li.innerHTML = `<a href=./${data.href}>${data.content}</a>`;
    data.parentElement.append(li);
}

outerInput();
innerInput();