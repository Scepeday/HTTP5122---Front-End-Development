let userinput = prompt("Which team number you belong to?");
let name1 = "Jhon";
let name2 = "Lulu";
let name3 = "Julia";
let name4 = "Thomas";

if (userinput > 0 && userinput < 7){
    let username = prompt("What's your first name?");
    if (username == name1){
        alert("Welcome " + name1 + " Smith");
    }
    else if (username == name2){
        alert("Welcome " + name2 + " Knox");
    }
    else if (username == name3){
        alert("Welcome " + name3 + " Walton");
    }
    else if (username == name4){
        alert("Welcome " + name4 + " Miller");
    }
    else{
        alert("Access denied!");
    }
} else {
    alert("Access denied!");
}
