async function getUsers(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
    let usersInfo = await res.json();
    return usersInfo;
}

async function usersPagination(currentPage,limit){
    console.log(currentPage);
    let res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts&_page=${currentPage}&_limit=${limit}`)
    let users = await res.json();
    return users;
}

export{
    getUsers,
    usersPagination
}