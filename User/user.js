import {getParamData} from '../functions.js'
import {getUserData,getUsersPostsData,getUsersAlbumsData} from './userController.js';
import {createUserProfile} from './userView.js'

async function init(){
    let userId = getParamData('userId')

    let user = await getUserData(userId);
                               
    let posts = await getUsersPostsData(userId)

    let albums = await getUsersAlbumsData(userId);

    createUserProfile(user,posts,albums);

}

init();
