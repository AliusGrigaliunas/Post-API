import {renderHeader} from '../header.js'
import {getNewUserData} from './createUserController.js'
import {createUser} from './createUserView.js'
async function init(){
    renderHeader();

    let userForm = document.querySelector('#create-user-form');

    userForm.addEventListener('submit',async (event)=>{
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

      let newUsercreated = await getNewUserData(newUser);
      createUser(newUsercreated,event.target)

    });
}

init();