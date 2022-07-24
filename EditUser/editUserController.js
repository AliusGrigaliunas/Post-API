async function getUserData(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await res.json();
    return user;
}

export {getUserData};