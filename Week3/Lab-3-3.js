//LAB 3 - ARRAYS & LOOPS - PART 3

var treshhold = 35;
const shoppingcart = [];
var total = 0;
var list = "Item prices: ";

while (total < 35){
	let userinput = prompt("Please enter the cost of your item: ");
	shoppingcart.push(userinput); 
	var convert = parseInt(userinput);
	total += convert;
}

alert("Your shipping for this order will be free! Because you spent a total of " + "$" + total);


for (var i = 0; i < shoppingcart.length; i++) {
  list += shoppingcart[i];
  list += " | ";
}
console.log(list);

