//LAB 3 - ARRAYS & LOOPS - PART 2

const team = ["Jimmy", "Dave", "Ron", "Mike", "Brett"];

console.log(team);

team.pop();
console.log(team);

team.unshift("Sean");
console.log(team);

team.sort();
console.log(team);

var number = team.length;
alert("We have "+ number + " people in our group.");

var num = 1;
for (var i = 0; i < number; i++){
    console.log(team[i] + " is # "+ num);
    num ++;
}
