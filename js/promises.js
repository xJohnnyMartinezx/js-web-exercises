"use strict";
fetch('https://api.github.com/users', {headers: {'Authorization': `Bearer ${GIT_API}`}})
    .then(response => console.log(response))