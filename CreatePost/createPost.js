import {renderHeader} from '../header.js'
import {renderOptionElement} from '../functions.js'
import {createNewPost, getallusers} from './createPostController.js';
import {createPost} from './createPostView.js'

async function init() {
  renderHeader();

  let data = await getallusers()
  
  let selectElement = document.querySelector('#post-author');

  data.map(item => {
    renderOptionElement({
      name:item.name,
      value: item.id,
      parentElement: selectElement
    })
  })

  let createPostForm = document.querySelector('#create-post-form');

  createPostForm.addEventListener('submit', async(event) => {
    event.preventDefault();

    let title = event.target.elements.title.value;
    let content = event.target.elements.content.value;
    let author = event.target.elements.author.value;

    let newPost = {
      title,
      body: content,
      userId: author,
    };

      let createdPost = await createNewPost(newPost)

      createPost(createdPost, event.target)
       
  })
}

init();