import {renderHeader} from '../header.js'
import {getUsers} from './usersController.js'
import {createUsersList} from './usersView.js'


async function init(){
    renderHeader();
    let users = await getUsers();
    createUsersList(users);
}

init();
