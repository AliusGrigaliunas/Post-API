import {renderHeader} from '../header.js'
import {allAlbums,allUserAlbums} from './albumsController.js'
import {AlbumsList} from './albumView.js'
import {getParamData} from '../getParamData.js'

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
    let albums = await allAlbums();
    AlbumsList({
        albumsData: albums,
        wrapperSelector: '.container',
        allAlbums: true
    })
}
init();