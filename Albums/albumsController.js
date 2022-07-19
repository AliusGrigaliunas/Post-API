async function allAlbums(){
    let res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=20&_embed=photos&_expand=user')
    let albums = await res.json();
    return albums;
}
async function allUserAlbums(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums?_embed=photos&_expand=user`);
    let albums = await res.json();
    return albums;
}


export {
    allAlbums,
    allUserAlbums
}