let container = document.querySelector('.container');

let loading = document.createElement('h1');
let loadBox = document.querySelector('.loading');

loading.textContent = 'Loading...'

loadBox.append(loading);

fetch('https://jsonplaceholder.typicode.com/posts?_limit=15').then(res=>res.json()).then(data=>{
    data.map((post,index)=>{
        let div = document.createElement('div');
        div.setAttribute('style','border:1px solid black');

        let post_title = document.createElement('h1');
        post_title.textContent = post.title

        let post_description = document.createElement('p');
        post_description.textContent = post.body

        let comment_item = document.createElement('div')

        let post_link = document.createElement('a');

        let button = document.createElement('button')

        fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).then(res=>res.json()).then(user=>{
            post_link.href = '.';
            post_link.textContent = user.name;
        })

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`).then(res=>res.json()).then(comments=>{
            comments.map(comment=>{
                comment_item.innerHTML += ` <div class="comment-item">
                                            <fieldset>
                                            <legend>Comment</legend>
                                            <h3>${comment.name}</h3>
                                            <span>Comment made by: ${comment.email}</span>
                                            <p>${comment.body}</p>
                                            </fieldset>
                                            </div class="comment-item">
                                            `
                                            
            })
        })

        button.textContent = 'Show Heaven'

        button.addEventListener('click',(event)=>{
            event.preventDefault();
            if(comment_item.style.display == 'none'){
                comment_item.style.display = 'block';
                button.textContent = 'Show heaven';
            }else {
                comment_item.style.display = 'none';
                button.textContent = 'Show hell';
            }
        })
        div.append(post_title,post_description,post_link,button,comment_item)
        container.append(div);
    })
    loading.style.display = 'none'
})

function loader(){
    container.style.display = 'block'
}


