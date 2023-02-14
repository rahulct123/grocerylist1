var total = 0;
var groceryList = [
{
name: "pizza rolls",
price: 3.00,
},
{
name: "Faygo",
price: 2.00,
},
{
name: "beer",
price: 2.50,
},
{
name: "Cheetos",
price: 1.75,
},
];

for (var i = 0; i < groceryList.length; i++) {
	
	total += groceryList[i].price;

	console.log(groceryList[i].name + " $" + groceryList[i].price.toFixed(2));

	var printedList = document.createElement('div');

printedList.setAttribute('class', 'grocerylist') 

printedList.innerHTML = groceryList[i].name  + " $" + groceryList[i].price.toFixed(2);

document.body.appendChild(printedList);


};

groceryList.totalAmount = function (){
	var total = 0;
		for (i = 0; i < groceryList.length; i++){
			total += groceryList[i].price;
		}
		return total.toFixed(2);
	};

var printedTotal = document.getElementById('totalbox');

printedTotal.innerHTML = "Total: $" + groceryList.totalAmount(); 

document.body.appendChild(printedTotal);

function addToList() {
	var newItem = document.getElementById("itemName").value;
	var newPrice = Number(document.getElementById("itemPrice").value);
    //var newObject = itemName + itemPrice
    var item = {
	name: newItem,
	price: newPrice 
	};
	groceryList.push(item);

	

	var printedList = document.createElement('div');
	printedList.setAttribute('class', 'grocerylist');
	printedList.innerHTML = groceryList[i].name  + " $" + groceryList[i].price.toFixed(2);

document.body.appendChild(printedList);

	groceryList.totalAmount = function (){
	var total = 0;
		for (i = 0; i < groceryList.length; i++){
			total += groceryList[i].price;
		}
		return total.toFixed(2);
	};
	

var printedTotal = document.getElementById('TotalBox');

printedTotal.innerHTML = "Total: $" + groceryList.totalAmount();

document.body.appendChild(printedTotal);

};