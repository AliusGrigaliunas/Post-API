import {renderHeader} from '../header.js'
import {allAlbums,allUserAlbums,allUserAlbumsPagination} from './albumsController.js'
import {AlbumsList} from './albumView.js'
import {getParamData} from '../getParamData.js'
import {paginationForAll} from '../pages.js'

async function init(){
    renderHeader();
    let userId = getParamData('userId')
    if(userId){
        let userAlbums = await allUserAlbums(userId);
        AlbumsList({
            albumsData: userAlbums,
            wrapperSelector: '.container',
            allAlbums:false
        })
        return;
    }

    let paginationWrapper = document.createElement('div');

    let data =await allAlbums();
    let info =await paginationForAll({
        data,
        paginationWrapper,
        name:'albums.html',
        limitNumber:10
    })

    document.body.append(paginationWrapper);

    let {currrentPage,limit} = info;

    let albums = await allUserAlbumsPagination(currrentPage,limit);
    AlbumsList({
        albumsData: albums,
        wrapperSelector: '.container',
        allAlbums: true
    })

}
init();