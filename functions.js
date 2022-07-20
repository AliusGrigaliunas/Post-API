function renderListElements(data){
    let DOMElement = document.createElement(data.element);
    DOMElement.innerHTML = data.information;
    data.parentElement.append(DOMElement);
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

export {
    renderListElement,
    renderListElements,
    firstLetterCapitilize,
    renderOptionElement
}
