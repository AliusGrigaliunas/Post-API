const urlParam = document.location.search
const param = new URLSearchParams(urlParam);
const results = param.get('search-input')

let text = document.querySelector('.answer');

let text_posts = document.createElement('div')
let profileText = document.createElement('div');

document.body.append(profileText,text_posts);

profileText.innerHTML = `<h1>Users:</h1>`
text_posts.innerHTML = `<h1>Posts:</h1>`


if(results == ''){}
else{
    fetch(`https://jsonplaceholder.typicode.com/users?username_like=${results}`).then(res=>res.json()).then(username=>{
    console.log(username);
    if(username[0]){
        profile(username)
    }else{
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${results}`).then(res=>res.json()).then(Name=>{
            console.log(Name);
            if(Name[0]){
                profile(Name)
            }
            else{
                fetch(`https://jsonplaceholder.typicode.com/users?email_like=${results}`).then(res=>res.json()).then(email=>{
                    console.log(email);
                    if(email[0]){
                        profile(email)
                    }else{
                        text.innerHTML = `<div>Nerasta</div>`
                    }
                })
            }
        })
    }
})

    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${results}`).then(res=>res.json()).then(titles=>{
        titles.map(post=>{
            let li = document.createElement('li');
            li.innerHTML = `<a href=./post.html?userId=${post.id}>${post.title}</a>`;
            text_posts.append(li);
        })
})
}


function profile(info){
    info.map(singleInfo=>{
        let li = document.createElement('li');
        li.innerHTML = `<a href=./user.html?userId=${singleInfo.id}>${singleInfo.name}</a>`;
        profileText.append(li)
//         name.innerHTML = `<div class="container">
//         <div class="user-wrapper">
//             <p>Name: <strong>${singleInfo.name}</strong></p>
//             <p>Username: (<strong>${singleInfo.username}</strong>)</p>
//             <p><strong>City:</strong>${singleInfo.address.city}</p>
//             <p><strong>Street:</strong>${singleInfo.address.street}</p>
//             <p><strong>House number:</strong>${singleInfo.address.suite}</p>
//             <p><strong>Zipcode:</strong>${singleInfo.address.zipcode}</p>
//             <p><a href="callto:${singleInfo.phone}"><strong>Number:${singleInfo.phone}</strong></a>
//             <p><a href=https://www.google.com/maps/@${singleInfo.address.geo.lat},${singleInfo.address.geo.lng},14z><strong>Location</storng></a></p>
//             <p><strong>Website: </strong>${singleInfo.website}</p>
//             <p><strong>Company: </strong>${singleInfo.company.name}<p>
//             <p><strong>${singleInfo.company.bs}</strong></p>
//         </div>
//     </div>
// `                       
    })                
}