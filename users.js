function init(){
    let container = document.querySelector('.container');
    let ul = document.createElement('ul');
    container.append(ul);
    fetch('https://jsonplaceholder.typicode.com/users?_embed=posts').then(res=>res.json()).then(users=>{
        users.map(user=>{
            let userData = {
                content:`<strong>${user.name}</strong> (${user.username}) Posts made: ${user.posts.length}`,
                href: `/user.html?userId=${user.id}`,
                parentElement: ul
            }
            renderListElement(userData)
        })
    })
}

init();
