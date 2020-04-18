'use strict'; 

// Create studentRecord object.
var studentRecord = {
    fname: " Charlie", 
    lname: " Yu",
    major: "Computer Science", 
    gpa: 0,

    // Display all properties in the studentRecord object. 
    displayStudentRecord : function() {
        document.write(" Name: " + this.fname + " " + this.lname + "<br><br>");
        document.write("Major: " + this.major + "<br><br>");
        document.write("  GPA: " + this.gpa + "<br><br>");
    }, 

    // Set the studentRecord object's major property
    setMajor : function(newMajor) {
        if (newMajor != "") {
            this.major = newMajor; 
        } else {
            document.write("new major error!")
        }
    },

    // Add a new method called setGPA. 
    // This method will be used to update the gpa property. 
    setGPA : function(newGPA) {
        if (newGPA != "") {
            this.gpa = newGPA; 
        } else {
            document.write("new gpa error!");
        }
    } 
};


studentRecord.displayStudentRecord();
studentRecord.setMajor("Mechanical Engineer");
studentRecord.setGPA(3.19);
console.log(studentRecord);