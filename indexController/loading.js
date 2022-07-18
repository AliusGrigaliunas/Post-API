export default function loading(){
    let container = document.querySelector('.container')

    let loadingbox = document.createElement('span');
    loadingbox.textContent = 'Loading...';

    container.append(loadingbox);
}