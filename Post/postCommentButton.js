import {renderSingleComment} from '../functions.js'
import {comment} from './postController.js'
import {editCommentButton} from './editCommentsButton.js'
import {showComment} from './showNotShowComments.js'


function commentButton(post,div){

        let comment_wrapper = document.createElement('div');

        post.comments.map(comment=>{
            let comment_item = renderSingleComment(comment);

            editCommentButton(comment_item,comment);
            
            comment_wrapper.append(comment_item);
        })
        
        showComment(comment_wrapper,div);

        let postComment = document.createElement('button');
        postComment.textContent = 'Post comment'

        postComment.addEventListener('click',event=>{
            event.preventDefault();
            postComment.hidden = true

            let createComment = document.createElement('div');
            createComment.classList.add('error');

            if( document.querySelector('.error')){
                document.querySelector('.error').remove()
            }
            let form = document.createElement('form');
            form.classList.add('createComment')

            form.innerHTML =`
                    <div class ='title'>
                        <label for="title">Title</label>
                        <input name="title">
                    </div>
                    <div class ='madeBy'>
                        <label for="madeBy">Made By</label>
                        <input name="madeBy">
                    </div>
                    <div class ='body'>
                        <label for="body">Body</label>
                        <input name="body">
                    </div>
                    <input type="submit" value="Comment">
            `

            form.addEventListener('submit',async event=>{
                event.preventDefault();

                let newData = await comment({
                    name: form.elements.title.value,
                    email: form.elements.madeBy.value,
                    body:form.elements.body.value
                })

                let {name,email,body} = newData;

                let newComment = renderSingleComment(newData);
                div.append(newComment)

            })

            createComment.append(form);
            div.append(createComment)
        })


        div.append(comment_wrapper,postComment)
}
export {commentButton}