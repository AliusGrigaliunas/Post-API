import { commentPatchMethod } from "./postController.js";
import {getParamData} from '../functions.js'

export async function editCommentButton(comment_item,comment){

    let postId = getParamData('postId');

    let editButton = document.createElement('button');
    editButton.classList.add('editButtons');
    editButton.textContent = 'Edit';

    editButton.addEventListener('click',(event)=>{
        event.preventDefault();
        let editCommentForm = document.createElement('form');

        editCommentForm.innerHTML=`
        <label for="name">Name</label>
        <input name="name">
        <label for="email">Email</label>
        <input name="email"}>
        <label for="body">Body</label>
        <input name="body">
        <input type="submit" value="Sumbit Edit">`;

        let {name,email,body} = comment;
        
        editCommentForm.elements.name.value = name;
        editCommentForm.elements.email.value = email;
        editCommentForm.elements.body.value = body;

        editCommentForm.addEventListener('submit',async event=>{
            event.preventDefault();
            let newName = editCommentForm.elements.name.value;
            let newEmail = editCommentForm.elements.email.value;
            let newBody = editCommentForm.elements.body.value;

            let editedComment = await commentPatchMethod(postId,{
                name: newName,
                email: newEmail,
                body:newBody
            })
            comment = editedComment
            let {name,email,body} = editedComment;

            comment_item.innerHTML = ` 
            <div class="comment-item">
            <fieldset>
            <legend>Comment</legend>
            <h3>${name}</h3>
            <span>Comment made by: ${email}</span>
            <p>${body}</p>
            </fieldset>
            </div>
            `

            comment_item.append(editButton)
            event.target.reset();
        })

        comment_item.append(editCommentForm)

    })
    comment_item.append(editButton)

}