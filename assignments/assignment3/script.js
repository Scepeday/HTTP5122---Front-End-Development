var fighter = {
    league: 'UFC',
    style: ['Muay Thai', 'Boxing'],
    name: 'Rafael Fiziev',
    weightclass: 'Lightweight',
    learnstyle: function(){
        var newstyle = 'Wrestling';
        fighter.style.push(newstyle);
        return fighter.style;
    }
};

//fighter.learnstyle();
//alert("New Style Added to the list: " + fighter.style);
console.log(fighter);

var changeleague = prompt("Do you think Rafael should go to another league, like ONE or PFL?", "Type ONE or PFL here");
var uppercaseleague = changeleague.toUpperCase();
if (uppercaseleague == 'ONE'){
    fighter.league = 'ONE';
    console.log(fighter);
}else if (uppercaseleague == 'PFL'){
    fighter.league = 'PFL';
    console.log(fighter);
}

var changeclass = prompt("Do you think Rafael should go UP or DOWN in weightclass?", 'Type Up or Down');
var uppercaseclass = changeclass.toUpperCase();
if (uppercaseclass == 'UP'){
    fighter.weightclass = 'Featherweight';
    console.log(fighter);
}else if (uppercaseclass == 'DOWN'){
    fighter.weightclass = 'Welterweight';
    console.log(fighter);
}

fighter.learnstyle();
console.log(fighter);