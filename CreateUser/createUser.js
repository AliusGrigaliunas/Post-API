import {renderHeader} from '../header.js'
import {getNewUserData,allUsersData} from './createUserController.js'
import {createUser} from './createUserView.js'
async function init(){
    renderHeader();

    let userForm = document.querySelector('#create-user-form');

    


    userForm.addEventListener('change',async event=>{
        event.preventDefault();
        let users = await allUsersData();
        let userName = false;
        let emailExists = false;
        users.forEach( user=>{
            if(userForm.username.value==user.username){
                userName = true
            }
            if(userForm.email.value==user.email){
                emailExists = true;
            }
        })
        if(userName==true){
            userForm.username.setAttribute('style','background-color:lightPink')
        }else{
            userForm.username.setAttribute('style','background-color:lightgreen')
        }
        if(emailExists == true){
            userForm.email.setAttribute('style','background-color:lightPink')
        }else{
            userForm.email.setAttribute('style','background-color:lightgreen')
        }

    })

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
      let users = await allUsersData();
      let checkIfUserExsits = false;
      users.forEach( user=>{
        if(userForm.username.value==user.username||userForm.email.value==user.email){
            checkIfUserExsits = true
        }
      })
      let newUsercreated = await getNewUserData(newUser);
      createUser(newUsercreated,event.target,checkIfUserExsits)

    });
}

init();