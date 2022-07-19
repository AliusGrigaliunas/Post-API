import {indexPostList} from './indexPostCollector.js';
import {renderHeader} from '../header.js'
import indexPostViewer from './indexPostView.js'
import {indexAlbumList} from "./indexAlbumCollector.js";
import indexAlbumViewer from './indexAlbumView.js';


async function init(){
    renderHeader();

    let post = await indexPostList()
    if(post){
        indexPostViewer(post);
    }else{
        loadingbox();
    }
    let albums = await indexAlbumList();
    indexAlbumViewer(albums)

}
init();
