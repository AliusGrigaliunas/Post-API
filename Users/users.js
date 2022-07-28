import {renderHeader} from '../header.js'
import { paginationForAll} from '../pages.js';
import {getUsers,usersPagination} from './usersController.js'
import {createUsersList} from './usersView.js'
import {selectMaker} from '../selector.js'

async function init(){
    renderHeader();
    let data = await getUsers();
    let paginationWrapper = document.createElement('div');
    let info = await paginationForAll({
        data,
        paginationWrapper,
        name:'users.html',
        limitNumber:5
    })
    console.log(info);
    document.body.append(paginationWrapper)
    let {currrentPage,limit} = info;

    let users = await usersPagination(currrentPage,limit);

    selectMaker([1,2,5],'users.html')
    createUsersList(users);
}

init();
