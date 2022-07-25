async function getPost(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=1&_expand=user&id=${id}&_embed=comments`);
    let posts = await res.json();
    return posts;
}

async function comment(commentData){
    let res = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    let comment = await res.json();
    return comment;
}

async function commentPatchMethod(id,oldData){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(oldData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let editedComment = await res.json();
    return editedComment;
}
export {getPost,comment,commentPatchMethod}