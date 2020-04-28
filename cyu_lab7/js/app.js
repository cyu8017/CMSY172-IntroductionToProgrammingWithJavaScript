//Name: Charlie Yu
//Program Description: HTML Forms 
//Date: 5/2/2018

//Turn on strict mode 
"use strict";

//Use the following function, processForm, as the event handler for
//the button element with the id dispVals you will add to the form.  
//Add program code to display the first name, last name, and
//email to the output element defined in the function.

function processForm() {
    var output = document.getElementById("outputEl");

    // Use document.getElementById and the value property of 
    // the three input elements to get the values from the form.
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("emailAddress").value;

    // Display the three values below the form.
    // Use the following format:
    //    The firstName and lastName combined on one line.
    //    The email address on a new line after the names.
    output.innerHTML = firstName + " " + lastName + "<br><br>";
    output.innerHTML += email;

}

// Use the init function below to add a click event handler 
// to the form button with the id of dispVals.
// Use the processForm function as the event handler function
function init() {
    document.getElementById("dispVals").onclick = processForm;
}

// Sets the window onload event to use the init 
// function handler.
window.onload = init;
