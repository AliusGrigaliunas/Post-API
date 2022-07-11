let container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(users=>{
    users.map(user=>{

        let userBox = document.createElement('div');
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(res=>res.json()).then(postNumber=>{
            console.log(postNumber);
            userBox.innerHTML=`<h1><a href='user.html?userId=${user.id}'>${user.name} (${user.username})</a> ${postNumber.length}</h1>`
        })
        container.append(userBox)
    })

})