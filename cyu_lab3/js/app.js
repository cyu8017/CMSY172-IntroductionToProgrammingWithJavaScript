'use strict'; 

// Calculate the square of a numeric value. 
// Parameters: Number to be squared.
function squareIt(squareMe) {
    return squareMe * squareMe; 
}

// Display the elements of an array. 
// Parameters: array, element, index, and name.
function arrDisplay(el, index, arr) {
    var lastIndex = arr.length -1; 

    if (index !== lastIndex) {
        document.write(el + ", "); 
    } else {
        document.write(el + "<br><br>"); 
    }
}

// Sort numeric values. 
// Parameters: numbers of be compared
function comparedNumbers(a, b) {
    return a - b; 
}

document.write("<h1>Lab 3: Arrays</h1>"); 

// Build even squares array using the array map method 
// and the pre-built squareIt function.
var evenRoots = [2, 4, 6, 7, 10]; 
var evenSquares = evenRoots.map(squareIt); 

// Use the array forEach method and the pre-built arrDisplay function to 
// display the evenSquares array values. 
document.write("Even Squares: "); 
evenSquares.forEach(arrDisplay); 

// Create the odd roots array with odd values 1 through 9.
var oddRoots = [1, 3, 5, 7, 9]; 
var oddSquares = oddRoots.map(squareIt);

// Use forEach method and pre-built arrDisplay function
// to display the oddSquares array values. 
document.write("Odd Squares: "); 
oddSquares.forEach(arrDisplay);

// Create allSquares array by concatenating the evenSquares and oddSquares array.
var allSquares = evenSquares.concat(oddSquares);

// Build forEach method and the pre-built arrDisplay function to display the allSquares array. 
// Display allSquares in asending order. 
document.write("All Squaares: "); 
allSquares.forEach(arrDisplay);
allSquares.sort();

// Build forEach method and pre-built arrDisplay function to display the sorted allSquares array.
// Display allSquares in reverse order.
document.write("All Squares Sorted: "); 
allSquares.forEach(arrDisplay);
allSquares.reverse();

// Build forEach method and the pre-build arrDisplay function to display the 
// revered allSquares array values. 
document.write("All Squares Reversed: "); 
allSquares.forEach(arrDisplay);