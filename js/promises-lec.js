"use strict";

//fetch(url, {options})

// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));


// fetch('https://api.github.com/users')
//     // convert promise to response obj, the convert response obj to JSON object
//     .then(response => response.json())
//     // once converted to JSON, we can do whatever we want with it.
//     // data is the response array of objs
//     // .then(data => console.log(data))
//     .then(data => {
//         console.log(data)
//         document.getElementsByTagName("body")[0]
//             .innerHTML = data.map(githubUser => {
//                 return `<div><h1>${githubUser.login}</h1></div>`
//         }).join("")
//
//     })
//     .catch(error => console.error(error));

