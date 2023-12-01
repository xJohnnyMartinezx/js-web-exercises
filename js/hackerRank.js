function getDiagonal(arr) {
    // Write your code here
    arr.map((num, index) => {
        // num IS REPRESENTING THE VALUE OF THE ELEMENT AT THE CURRENT INDEX FOR EACH ITERATION/MAPPING,
        // IN THIS CASE num REPRESENTS EACH NESTED ARRAY IN OUR arrOfNums ARRAY WE ARE PASSING AS AN ARGUMENT TO OUR getDiagonal FUNCTION.
        // console.log(num);

        // index REPRESENTS THE CURRENT INDEX OF EACH ELEMENT (EACH NESTED ARRAY) WHICH
        // IN THIS CASE HAPPENS TO CORRELATE/MATCH UP WITH THE ELEMENT IN THE NESTED ARRAY THAT WE WANT TO EXTRACT.
        // console.log(index);

        console.log(num[index]);
    })
}


let arrOfNums = [
    [ 11, 2, 4 ],
    [ 4, 5, 6],
    [ 10, 8, -12]
];


// getDiagonal(arrOfNums);



function diagonalAbsoluteDifference(arr) {
    // Write your code here
    let LeftToRightArr = [];
    let LRTotal = 0;
    let RightToLeftArr = [];
    let RLTotal = 0;
    arr.map((num, index) => {
        // console.log(num[index]);
        LeftToRightArr.push(num[index]);
    })
    arr.reverse().map((num, index) => {
        console.log(num[index])
        RightToLeftArr.push(num[index]);
    })
    // console.log(rightArr);
    // console.log(leftArr);
    LeftToRightArr.forEach((num) => LRTotal += num)
    RightToLeftArr.forEach((num) => RLTotal += num)

    console.log(Math.abs(LRTotal - RLTotal));
}

diagonalAbsoluteDifference(arrOfNums);