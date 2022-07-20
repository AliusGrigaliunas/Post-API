import {renderHeader} from './header.js'

async function init(){
    renderHeader();

    let userForm = document.querySelector('#create-user-form');

    userForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let name = event.target.elements.name.value;
        let username = event.target.elements.username.value
        let email = event.target.elements.email.value
        let adressStreet = event.target.elements.street.value
        let adressSuite = event.target.elements.suite.value
        let adressCity = event.target.elements.city.value
        let adressZipCode = event.target.elements.zipcode.value
        let phone = event.target.elements.phone.value
        let website = event.target.elements.website.value
        let newUser = {
            name: name,
            username: username,
            email: email,
            adress:{
                street:adressStreet,
                suite:adressSuite,
                city:adressCity,
                zipcode:adressZipCode
            },
            phone:phone,
            website:website,
      };
            fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then(newUserCreated => {
                let {name, username, email, phone, website} = newUserCreated;
                let {city, street, suite, zipcode} = newUserCreated.adress
                console.log(newUserCreated);
                let newUserWrapper = document.createElement('div');
                newUserWrapper.innerHTML = `
                    <h1>Name: ${name} </h1>
                    <h1>Username: ${username}</h1>
                    <p>Email:${email}</p>
                    <p>adress:</p>
                    <ul>
                        <li>City: ${city}</li>
                        <li>Street: ${street}</li>
                        <li>Suite: ${suite}</li>
                        <li>Zipcode: ${zipcode}</li>
                    </ul>
                    <p>Phone:${phone}</p>
                    <p>Website:${website}</p>
                `
                event.target.after(newUserWrapper)
            });
    })
}

init();