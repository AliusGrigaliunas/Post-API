

export function showComment(comment_wrapper,div){

    let button = document.createElement('p')

    comment_wrapper.style.display = 'none';
    button.innerHTML = `<button>Show hell</button>`

    button.addEventListener('click',(event)=>{
        event.preventDefault();
        if(comment_wrapper.style.display == 'none'){
            comment_wrapper.style.display = 'block';
            button.innerHTML = `<button>Show Heaven</button>`;
        }else {
            comment_wrapper.style.display = 'none';
            button.innerHTML = `<button>Show hell</button>`;
        }
    })
    div.append(button)
}