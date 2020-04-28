// Turn on strict mode.
'use strict'; 

// Trim the pageTitle and convert it to uppercase. 
var pageTitle = 'js native object practice';
pageTitle = pageTitle.trim(); 
pageTitle = pageTitle.toUpperCase();

// Display the trimmed uppercase version of the pageTitle variable from the previous step.
document.write('<h1>' + pageTitle + '</h1>');

// Get the length of the pageTitle and display it. 
var ptLength = pageTitle.length; 
document.write('The page of ' + pageTitle + ' is ' + ptLength + ' characters long.');
document.write('<br><br>');

// Create a new date object called today with today's date. 
var today = new Date(); 
var todayDate = today.toDateString(); 

// Modify the following to display the numeric values for the month, day, 
// and year from the today date object created in the previous step. 
document.write("<strong>Today is: </strong>"); 
document.write('<br>');

document.write(" - Month: " + today.getMonth()); 
document.write('<br>');

document.write(" -   Day: " + today.getDate()); 
document.write('<br>');

document.write(" -  Year: " + today.getFullYear());
document.write('<br>');

document.write("------------------"); 
document.write('<br>');

document.write("Today's date is: <br>" + todayDate);
document.write("<br<br>"); 

// Create a new date object using the following data value(milliseconds)
var a = new Date(946702800000);

// toDateString method to convert milliseconds into date. 
var b = a.toDateString(); 
document.write("New Date: " + b); 
document.write("<br><br>"); 

// Calculate the number of milliseconds between the two dates and display the result. 
// Apply the getTime method. 
var difference = (today - a); 
document.write("The number of milliseconds between the two dates is: " + difference);