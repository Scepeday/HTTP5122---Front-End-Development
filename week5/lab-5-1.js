//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    age: 25,
    name: 'Santiago',
    account: 500,
    occupation: 'Student',
    whoami: function() {
        alert ("My name is " + meObject.name + " and I am a " + meObject.occupation);
    }
};

console.log(meObject.age);
meObject.whoami();
//alert("My name is " + meObject.name + " and I am a " + meObject.occupation);

