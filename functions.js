function renderListElements(data){
    let {element,information,parentElement} = data;
    let DOMElement = document.createElement(element);
    DOMElement.innerHTML = information;
    parentElement.append(DOMElement);
}

function renderListElement(data){
    let li = document.createElement('li');
    li.innerHTML = `<a href=./${data.href}>${data.content}</a>`;
    data.parentElement.append(li);
}

function firstLetterCapitilize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function renderOptionElement(data){
    let {name,value,parentElement} = data;

    let optionElement = document.createElement('option');
    optionElement.textContent = name;
    optionElement.value = value;

    parentElement.append(optionElement);
}

function getParamData(data){
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let userId = urlParams.get(data);
    return userId;
}

function renderSingleComment(data){
    let {name,email,body} = data;
    let comment_item = document.createElement('div')
            comment_item.innerHTML += ` 
            <div class="comment-item">
            <fieldset>
            <legend>Comment</legend>
            <h3>${name}</h3>
            <span>Comment made by: ${email}</span>
            <p>${body}</p>
            </fieldset>
            </div>
            `
    return comment_item;
}

export {
    renderListElement,
    renderListElements,
    firstLetterCapitilize,
    renderOptionElement,
    getParamData,
    renderSingleComment
}
