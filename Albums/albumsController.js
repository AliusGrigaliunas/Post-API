async function allAlbums(){
    let res = await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user')
    let albums = await res.json();
    return albums;
}
async function allUserAlbums(id){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums?_embed=photos&_expand=user`);
    let albums = await res.json();
    return albums;
}


async function allUserAlbumsPagination(currentPage,limit){
    console.log(currentPage,limit);
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_page=${currentPage}&_limit=${limit}`);
    let albums = await res.json();
    return albums;
}

export {
    allAlbums,
    allUserAlbums,
    allUserAlbumsPagination
}