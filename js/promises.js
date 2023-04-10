"use strict";

function gitUser(username){

fetch(`https://api.github.com/users/${username}/events/public`,
    {headers: {'Authorization': `Bearer ${GIT_API}`}})
    .then(response => response.json())
    .then(data => {
        console.log(data[0].created_at);
    })
}

gitUser("xjohnnymartinezx")