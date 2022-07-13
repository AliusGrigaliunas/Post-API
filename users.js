let container = document.querySelector('.container');
let userBox = document.createElement('div');
fetch('https://jsonplaceholder.typicode.com/users?_embed=posts').then(res=>res.json()).then(users=>{
    users.map(user=>{
        userBox.innerHTML +=`<h1><a href='./user.html?userId=${user.id}'>${user.name} (${user.username})</a> ${user.posts.length}</h1>`
        container.append(userBox)
    })
})