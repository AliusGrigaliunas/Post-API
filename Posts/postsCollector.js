async function getPostByUserId(id,limit,page){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=${limit}&userId=${id}&_page=${page}`);
    let usersPosts = await res.json();
    return usersPosts;
}
async function getAllPosts(){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user`);
    let allPosts = await res.json();
    return allPosts;
}
async function getPostsByPages(id,limit){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user&_page=${id}&_limit=${limit}`);
    let allPosts = await res.json();
    return allPosts;
}

export{
    getPostByUserId,
    getAllPosts,
    getPostsByPages
}