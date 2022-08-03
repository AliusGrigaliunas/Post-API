async function getUserData(id){
    let res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await (await res).json();
    return user;
}
async function getUsersPostsData(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    let posts = await (await res).json();
    return posts
}
async function getUsersAlbumsData(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    let albums = await res.json();
    return albums;
}

export {
    getUserData,
    getUsersPostsData,
    getUsersAlbumsData
}