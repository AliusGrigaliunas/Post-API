import{renderOptionElement} from '../functions.js'
import {putMethod} from './editPostsController.js'
async function inputPostInfoIntoForm(post,users){

    let form = document.querySelector('#post-form')

    let {title,body} = form;

    title.value = post.title;
    body.value = post.body;

    let selectElement = document.querySelector('#post-author');

    users.map(user => {
      renderOptionElement({
        name:user.name,
        value: user.id,
        parentElement: selectElement
      })
    })
    selectElement.value = post.userId

    if(!post.title){
        title.value = ' ';
        body.value = ' ';
        selectElement.value = '';
        form.innerHTML = `<h1>Nieko Nėra parsiusta, bandykit iš naujo</h1>
        <a href= posts.html>Bandykit iš naujo</a>
        `
    }

    let createNewEditedPost = document.querySelector('#post-form');
    createNewEditedPost.addEventListener('submit',async (event)=>{
        console.log(post);
        event.preventDefault();
        let oldData = {
            Title: title.value,
            Body: body.value,
            Author:users[selectElement.value-1].name
        }
        let newUser = await putMethod(oldData);
        let {Title,Body,Author} = newUser
        let container = document.querySelector('.container')

        let div = document.createElement('div');
        div.setAttribute('style','border:1px solid black');

        div.innerHTML = `
        <h1>${Title}</h1><a href=./editPosts.html?postId=${post.id}>Rewrite History young one</a>
        <p>${Body}</p>
        <a href="./user.html?userId=${selectElement.value}">${Author}</a>`

        container.append(div);
    })

}

export{
    inputPostInfoIntoForm
}