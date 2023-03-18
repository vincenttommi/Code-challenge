const marks = parseInt(prompt("enter students marks"));
// Declared a  variable called  marks which holds values the user inputs

 let grade;
//  A  variable that holds values of grade in our function


//Declared a function called students marks and inside that function it passes to parameters marks and grade 
//s as to hold values being passed by the argument
function studentsmarks(marks, grade){

if(marks >= 80 && marks <= 100){

    // introduction of an if  else if else if statement to check if the conditions given is true for us 
    // to get the desired marks.
   grade = "A";
}else if(marks >= 60 && marks <=79){

    grade ="B";
}else if(marks >= 50 && marks <= 59){

grade = "C";

}else if (marks >= 40  && marks <= 49){

 grade = "D";

}else if(marks >= 0 && marks <= 40){
    grade ="E";
}else{


    console.log("Invalid input . please enter marks between 0 to 100");
    // outputs the above message if marks entered by the user is not according to our defined range
}


return grade;

// return  values being passed by grade

}   

console.log(studentsmarks(marks, grade));

//  The "studentsmarks" function is called with "marks" 
// and "grade" as parameters, and the return value (which is the grade) is printed to 
//  the console. The function determines the grade based on the given marks and returns the grade.