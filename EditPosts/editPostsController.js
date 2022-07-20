async function getPostsData(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post = await res.json();
    return post;
}
async function getUsersName(){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let user = await res.json();
    return user;
}

async function putMethod(data){
   let res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
let newUserData = await res.json();
return newUserData;
}

export {
    getPostsData,
    getUsersName,
    putMethod
}