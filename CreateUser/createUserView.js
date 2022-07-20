export function createUser(newUserCreated,formElement){
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
    formElement.after(newUserWrapper)
}