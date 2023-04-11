fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(data => console.log(data))
    .catch(error => console.error(error))

// let newMovie = {
//     id: 3,
//     title: "My second post",
//     director: "Codeup"
// }

// function createMovie(){
//     let title = prompt("What is the title of the movie")
//     let director = prompt("Who is the director?")
//     return {title, director};
// }

// fetch("http://localhost:3000/movies", {
//     // establishes
//     method: "POST",
//     headers: {
//         // sever needs to know what format we are sending the data
//         "Content-Type": "application/json"
//     },
//     // coverts JS obj to JSON obj
//     body: JSON.stringify(createMovie())
// })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



// DELETE
function deleteMovieById(id){
    fetch(`http://localhost:3000/movies/${id}`, {
        method: "DELETE",

    }).then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

// deleteMovieById(6);


// GET BY ID
function getMovieById(id) {
    fetch(`http://localhost:3000/movies/${id}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

getMovieById(2)

// PUT ***** EDITS ALL PROPERTIES *******

// let editedMovie = {
//     title: "edited movie",
//     director: "edited director"
// }

// function editMovieById(id) {
//     fetch(`http://localhost:3000/movies/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(editedMovie)
//
//     }).then(resp => resp.json)
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// }
//
// editMovieById(1)



// PATCH  ***** ONLY EDITS SPECIFIED PROPERTIES *******

let editedMovie = {
    title: "PATCHED movie",
}


function editMovieById(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMovie)

    }).then(resp => resp.json)
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

editMovieById(1)


