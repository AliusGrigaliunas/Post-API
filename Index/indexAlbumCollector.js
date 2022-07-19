async function indexAlbumList(){
    let res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=20&_embed=photos&_expand=user');
    let albums = await res.json();
    return albums;
}

export {indexAlbumList};
