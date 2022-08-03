async function getphotosbyalbumId(albumTitle){
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=5&_embed=photos&_limit=5&_expand=user&id=${albumTitle}`);
    let photos = await res.json();
    return photos
}

export {getphotosbyalbumId}