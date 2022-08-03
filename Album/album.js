import {getphotosbyalbumId} from './albumController.js'
import {albumView} from './albumview.js'
async function init(){
    const urlParam = document.location.search
    const param = new URLSearchParams(urlParam);
    const albumId = param.get('albumId');

    let container = document.querySelector('.container')

    let albums = await getphotosbyalbumId(albumId);
    albumView(albums,container);
}
init();
