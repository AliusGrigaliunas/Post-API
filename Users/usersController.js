async function getUsers(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
    let usersInfo = await res.json();
    return usersInfo;
}

export{
    getUsers
}