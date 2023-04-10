
// #1
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #2
//                                        vv  vvv user ojb property
    let userLang = users.filter(user => user.languages.length >= 3);
//                  ^users arrays ^ user obj
console.log("Exercise #2:");
console.log(userLang);

// #3
let usersHTML = users.map(user =>{
    // language = html;
    return `<div class="card"></div>
            <div class="card-title">
            <h3>Exercise #3</h3>
</div>
<div class="card-body">
<p>${user.email}</p>
</div>
        `
})
document.getElementsByTagName("body")[0].innerHTML=usersHTML.join("");

// console.log(usersHTML)


//#4

const sum = users.reduce((total, person) => {
    // console.log("accumulation: " + accumulation);
    // console.log("currentNumber: " + currentNumber);
    return total + person.yearsOfExperience;
}, 0);

console.log("Total Years: " + sum);

//Average
console.log("Average: " + sum/users.length);

// #5

let longestLength = users.reduce((longestEmail, currentEmail) => {
    // console.log("line 81: " + longestEmail.email.length);
    // console.log("currenWord: " + currentEmail.email);
    // if (currentEmail.email.length > longestEmail.email) {
    //     longestEmail = currentEmail.email;
    // }
    // return longestEmail;
    if (longestEmail.length > currentEmail.email.length){
        return longestEmail;
    }
    else{
        return currentEmail.email
        }
    },"");

// console.log(longestLength)

// #6

let userNameList = users.reduce((finalString, user)=>{
    finalString += user.name + ", "
    return finalString;
}, "Your instructors are ")

console.log(userNameList);