import {getParamData} from '../getParamData.js'
import {getPost} from './postController.js'
import {viewPost} from './postView.js'
async function init(){
    let userId = getParamData('postId')
    let posts = await getPost(userId);
    viewPost(posts)
}


init();