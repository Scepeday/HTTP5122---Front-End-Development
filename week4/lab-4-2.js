//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

var course_math = 85;
var course_history = 92;
var course_science = 8;
var course_literature = 9;
var course_programming = 5;

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function average (x, y, z, a, b){
    var total = x + y + z + a +b;
    var div = total / 5;
    var divone = div.toFixed(1);
    console.log (divone);
    return (divone)
}

//average(5, 10, 15, 20, 25);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var avg = average (course_math, course_history, course_science, course_literature, course_programming);

if (avg >= 70){
    alert("Success");
}
else {
    alert("Review required");
}