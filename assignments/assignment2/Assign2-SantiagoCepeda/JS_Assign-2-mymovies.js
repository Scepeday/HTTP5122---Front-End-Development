const movielist = ["Interstellar", "The Godfather", "Pulp Fiction", "The Dark Knight", "12 Angry Men", "Top Gun: Maverick", "Schindler's List"];
alert("Which top 7 movie would you like?");
let userinput = prompt("Pick a number: 1-7");

while (userinput > 0 || userinput <= 7){
    if (userinput == "1"){
        alert("Number " + (movielist.indexOf("Interstellar")+1) + " on the list is " + movielist[0]);
        break;
    }
    else if (userinput == "2"){
        alert("Number " + (movielist.indexOf("The Godfather")+2) + " on the list is " + movielist[1]);
        break;
    }
    else if (userinput == "3"){
        alert("Number " + (movielist.indexOf("Pulp Fiction")+3) + " on the list is " + movielist[2]);
        break;
    }
    else if (userinput == "4"){
        alert("Number " + (movielist.indexOf("The Dark Knight")+4) + " on the list is " + movielist[3]);
        break;
    }
    else if (userinput == "5"){
        alert("Number " + (movielist.indexOf("12 Angry Men")+5) + " on the list is " + movielist[4]);
        break;
    }
    else if (userinput == "6"){
        alert("Number " + (movielist.indexOf("Top Gun: Maverick")+6) + " on the list is " + movielist[5]);
        break;
    }
    else if (userinput == "7"){
        alert("Number " + (movielist.indexOf("Schindler's List")+7) + " on the list is " + movielist[6]);
        break;
    }
    else{
        alert("Please enter a number between 1 and 7!");
        break;
    }
}

for (i = 0; i < movielist.length; i++){
    console.log("Movie "+ (i+1) + ": " + movielist[i]);
    
}