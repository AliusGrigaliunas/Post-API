async function getNewUserData(newUser) {
    let res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    let createdUser = await res.json();
    return createdUser;
}

async function allUsersData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    return users;
}



export {getNewUserData,allUsersData}