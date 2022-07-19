function commentButton(post,div){

        let button = document.createElement('p')

        let comment_item = document.createElement('div')
        post.comments.map(comment=>{
            comment_item.innerHTML += ` 
            <div class="comment-item">
            <fieldset>
            <legend>Comment</legend>
            <h3>${comment.name}</h3>
            <span>Comment made by: ${comment.email}</span>
            <p>${comment.body}</p>
            </fieldset>
            </div class="comment-item">
            `                          
        })
        
        comment_item.style.display = 'none';
        button.innerHTML = `<button>Show hell</button>`

        button.addEventListener('click',(event)=>{
            event.preventDefault();
            if(comment_item.style.display == 'none'){
                comment_item.style.display = 'block';
                button.innerHTML = `<button>Show Heaven</button>`;
            }else {
                comment_item.style.display = 'none';
                button.innerHTML = `<button>Show hell</button>`;
            }
        })

        div.append(button,comment_item)
}
export {commentButton}