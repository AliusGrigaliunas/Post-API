async function getPostByUserId(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`);
    let usersPosts = await res.json();
    return usersPosts;
}
async function getAllPosts(){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user`);
    let allPosts = await res.json();
    return allPosts;
}
async function getPostsByPages(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user&_page=${id}&_limit=25`);
    let allPosts = await res.json();
    return allPosts;
}

export{
    getPostByUserId,
    getAllPosts,
    getPostsByPages
}