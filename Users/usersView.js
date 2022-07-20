import { renderListElement, renderListElements } from "../functions.js";


export function createUsersList(users){

    let container = document.querySelector('.container');
    renderListElements({
        element: 'ul',
        information: null,
        parentElement:container
    })

        users.map(user=>{
            let userData = {
                content:`<strong>${user.name}</strong> (${user.username}) Posts made: ${user.posts.length}`,
                href: `/user.html?userId=${user.id}`,
                parentElement: container
            }
            renderListElement(userData)
        })

}