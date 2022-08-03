import {getParamData} from '../functions.js'
import{getUserData} from './editUserController.js'
import {viewNewUser} from './editUserViewer.js'
console.log("-----");

async function init(){
    let form = document.querySelector('#edit-user-form')

    let userId = getParamData('userId');
    let user = await getUserData(userId)



    viewNewUser(user,form);
}

init()