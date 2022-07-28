async function indexPostList(){
    let res =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1&_expand=user&_embed=comments');
    let postList = await res.json();
    return postList;
}

export {indexPostList}