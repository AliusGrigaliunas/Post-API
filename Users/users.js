import {renderHeader} from '../header.js'
import {getUsers,usersPagination} from './usersController.js'
import {createUsersList} from './usersView.js'


async function init(){
    renderHeader();
    let paginationShow = await usersPagination(1,5);
    console.log(paginationShow);
    let users = await getUsers();
    createUsersList(users);
}

init();
