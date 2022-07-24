export async function viewNewUser(user,form){

    
    let {name,username,email,website,phone} = user;
    let {city,street,suite,zipcode} = user.address;

    form.elements.name.value = name;
    form.elements.username.disabled = true
    form.elements.username.value = username;
    form.elements.email.disabled = true
    form.elements.email.value = email;
    form.elements.phone.value = phone;
    form.elements.website.value = website;
    form.elements.city.value = city;
    form.elements.street.value = street;
    form.elements.suite.value = suite;
    form.elements.zipcode.value = zipcode;

    form.addEventListener('submit',event=>{
        event.preventDefault();
        let container = document.querySelector('.container');
        
        let newName = form.elements.name.value;
        let newStreet = form.elements.street.value;
        let newSuite = form.elements.suite.value;
        let newCity = form.elements.city.value;
        let newzipcode = form.elements.zipcode.value;
        let newPhone = form.elements.phone.value;
        let newWebsite = form.elements.website.value;

        let editedUserContainer = document.createElement('div');
        editedUserContainer.innerHTML = `
            <h1>Name: ${newName} </h1>
            <h1>Username: ${username}</h1>
            <p>Email:${email}</p>
            <p>adress:</p>
            <ul>
                <li>City: ${newCity}</li>
                <li>Street: ${newStreet}</li>
                <li>Suite: ${newSuite}</li>
                <li>Zipcode: ${newzipcode}</li>
            </ul>
            <p>Phone:${newPhone}</p>
            <p>Website:${newWebsite}</p>
        `
        
        container.append(editedUserContainer)

    })
}