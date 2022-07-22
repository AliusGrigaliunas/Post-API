export function createUser(newUserCreated,formElement,userExists){
    if(userExists==false){
    let {name, username, email, phone, website} = newUserCreated;
    let {city, street, suite, zipcode} = newUserCreated.adress
    console.log(newUserCreated);
    let newUserWrapper = document.createElement('div');
    newUserWrapper.innerHTML = ``;
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
    if( document.querySelector('.error')){
        document.querySelector('.error').remove()
    }
    formElement.after(newUserWrapper)
    }else{
        let newUserWrapper = document.createElement('div');
        
        newUserWrapper.classList.add('error');
        let error = document.querySelectorAll('.error');
        error.forEach(error=>{
            error.remove()
        })
        newUserWrapper.innerHTML = `<p>Šis vartotojas jau egzistuoja!</p>`
        formElement.after(newUserWrapper);
    }
}