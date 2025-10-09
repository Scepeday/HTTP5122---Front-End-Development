//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the temperature to see if its ok to go for a dog walk
//It expects to receive one parameter, an Integer with the temperature value
//It will return a boolean value.
function checkTemp(currentTemp){
    if (currentTemp >= 30){
        return false;
    }else if(currentTemp <= -10){
        return false;
    }
    else{
        return true;
    }
}

var input = prompt("What's the current temperature?");
var temp = checkTemp(input);
if (temp === false){
    alert("Yikes! This is no weather for dog walking!");
}else {
    alert("You're good, have a nice walk!");
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
