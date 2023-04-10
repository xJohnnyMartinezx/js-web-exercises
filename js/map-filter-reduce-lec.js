
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];
// MAP

// CREATE A COLLECTION OF CARD ELEMENTS BASED ON AN ARRAY OF USER OBJECTS

// 1. DECLARE NEW VAR
//REFERENCE THE USERS ARRAY
let usersHTML = users.map(user =>{
        // language = html;
       return `<div class="card"></div>
            <div class="card-title">
            <h1>Instructor</h1>
</div>
<div class="card-body">
<h4>${user.name}</h4>
<p>${user.email}</p>
<ul>
<li>${user.languages}</li>
</ul>
</div>
        `
})
// console.log(usersHTML)
document.getElementsByTagName("body")[0].innerHTML=usersHTML.join("");

//FILTER
let playlist = [
    {
        title: "Details",
        artist: "Johnathan McReynolds",
        genre: "gospel"
    },
    {
        title: "Fergulicious",
        artist: "Fergie",
        genre: "pop",
    },
    {
        title: "World on a String",
        artist: "Frank Sinatra",
        genre: "jazz"
    },
    {
        title: "Respect",
        artist: "Aretha Franklin",
        genre: "soul/r&b"
    },
    {
        title: "I wanna Rock",
        artist: "Twisted Sister",
        genre: "rock n' roll"
    }
    ];

function sortGenre(genre){
    return playlist.filter(song => song.genre === genre);
}

function filterTitle(title){
    return playlist.filter(song => song.title.toLowerCase().includes(title.toLowerCase()));
}
//
// console.log(sortGenre("pop"));
// console.log(filterTitle("world"));


//REDUCE

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    // console.log("accumulation: " + accumulation);
    // console.log("currentNumber: " + currentNumber);
    return accumulation + currentNumber;
}, 0);
// ^ starting point/like starting bucket (optional)
// console.log(sum);



//COUNT WORDS
function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
