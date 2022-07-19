async function getPost(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=1&_expand=user&id=${id}&_embed=comments`);
    let posts = await res.json();
    return posts;
}
export {getPost}