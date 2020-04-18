'use strict'; 

function isOdd(num) {
    if (num % 2 === 0) {
        return false; 
    } else {
        return true; 
    }
}

var numToCheck = prompt("Enter an integer"); 
numToCheck = parseInt(numToCheck);

if (isNaN(numToCheck)) {
    alert("Error: Your emtry is not an integer."); 
} else {
    var result = isOdd(numToCheck);
    if (result === true) {
        document.write("Your entry of " + numToCheck + " is odd."); 
    } else {
        document.write("Your entry of " + numToCheck + " is even."); 
    }
}