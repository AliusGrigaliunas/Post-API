import {getParamData} from '../functions.js';
import {renderHeader} from '../header.js'
import {getUsersPosts,renderAllPost} from './postsView.js'

async function init(){
  renderHeader();
  let userId =  getParamData('userId')
  if (userId) {
    getUsersPosts(userId)
  }else{
    renderAllPost()
  }
}

init();
    

