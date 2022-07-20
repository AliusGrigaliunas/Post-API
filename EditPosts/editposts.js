import {getParamData} from '../functions.js'
import {getPostsData,getUsersName} from './editPostsController.js'
import{inputPostInfoIntoForm} from './editPostView.js'
async function init(){
    let postId = getParamData('postId');
    let post = await getPostsData(postId);
    let user = await getUsersName(post.userId)
    inputPostInfoIntoForm(post,user);
}

init();