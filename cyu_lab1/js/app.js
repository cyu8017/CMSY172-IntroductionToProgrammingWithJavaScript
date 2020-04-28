"use strict";

// Prompt user to enter month number. i.e., month 1 = January
var month = parseInt(prompt("enter month number: ", "1"));

document.write("Seasons: <br><br>");

// while(month<13) loop
// Process the months as with range of January - December
while (month < 13) {

    // Iteration of January (1) and February (2)
    if (month < 3) {
        // If iteration of month falls within the winter season, 
        // print the following output
        document.write("Month " + month + " - Winter <br>");
    }

    // Iteration of March (3) and April (4) and May (5)
    else if (month < 6) {
        // If iteration of month falls within the spring season, 
        // print the following output
        document.write("Month " + month + " - Spring <br>");
    }

    // Iteration of June (6) and July (7) and August (8)
    else if (month < 9) {
        // If iteration of month falls within the summer season, 
        // print the following output 
        document.write("Month " + month + " - Summer <br>");
    }

    // Iteration of September (9) and October (10) and November (11)
    else if (month < 12) {
        // If iteration of month falls within the fall season, 
        // print the following output 
        document.write("Month " + month + " - Fall <br>");
    }

    // Iteration of December (12)
    else {
        // If the iteration of month is 12, print the following output
        document.write("Month " + month + " - Winter <br>");
    }

    // Increment Month
    month = month + 1;
}
