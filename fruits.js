
function clicked(){
	var fruits = ["apple","orange","kiwi"];
	var userInput = prompt("Any new fruit?");
	var listedFruits = fruits.push(userInput)
	finishedList= fruits.sort();
	document.getElementById("printText").innerHTML = finishedList.join("  with  ");

	
}