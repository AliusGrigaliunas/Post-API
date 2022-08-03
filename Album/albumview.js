import {firstLetterCapitilize,renderListElements} from "../functions.js"
export function albumView(albums,container){
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
}