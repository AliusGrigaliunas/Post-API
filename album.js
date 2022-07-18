import { firstLetterCapitilize,renderListElements} from "./functions.js";

const urlParam = document.location.search
const param = new URLSearchParams(urlParam);
const userId = param.get('userId');
const albumTitle = param.get('albumId')

let container = document.querySelector('.container')

function init(){
    fetch(`https://jsonplaceholder.typicode.com/albums?_limit=5&_embed=photos&_limit=5&_expand=user&id=${albumTitle}`).then(res => res.json()).then(albums=>{
    albums.map(album=>{
        let title = firstLetterCapitilize(album.title)
            container.innerHTML =`
                            <h1>${title}</h1>
                            <p><a href='user.html?userId=${album.userId}'>${album.user.name}<a></p>`
            album.photos.map(photo=>{
                let photoData = {
                    element: 'a',
                    information: `<img src='${photo.thumbnailUrl}'></img>`,
                    parentElement: container
                }
                renderListElements(photoData)
            })
        })
    })
}
init();

// function renderElements(data){
//     let DOMElement = document.createElement(data.element);
//     DOMElement.innerHTML += data.information;
//     container.append(DOMElement);
// }