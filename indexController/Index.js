import {indexPostList} from './indexPostCollector.js';
import {renderHeader} from '../header.js'
import indexPostViewer from './indexPostView.js'
import {indexAlbumList} from "./indexAlbumCollector.js";
import indexAlbumViewer from './indexAlbumView.js';
import loadingbox from './loading.js'
async function init(){
    renderHeader();
    // loadingbox();

    let post = await indexPostList()
    if(post){
        indexPostViewer(post);
    }else{
        loadingbox();
    }
    // indexPostViewer(post);
    let albums = await indexAlbumList();
    indexAlbumViewer(albums)

}
init();
