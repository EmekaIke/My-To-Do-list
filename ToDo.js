const button = document.getElementById("Enter");
const input = document.querySelector("input");
const ol = document.querySelector('ol');
const reset = document.getElementById("reset");
const delButton = document.getElementById('delBtn');
// To create a DOM that accepts user input and adds them as list

function afterClick(){
	if(input.value.length>0){
		createListElement()
	}
}

function createListElement(){
	let li=document.createElement('li');
	li.appendChild(document.createTextNode(input.value))
	ol.appendChild(li);
	input.value="";
}

function afterKeyPress(event){
	if(input.value.length && event.which===13){
		createListElement();
	}
}

function resetList(){
	while(ol.hasChildNodes()){
		ol.removeChild(ol.firstChild);
	}
}

function deleteList(){
	ol.removeChild(ol.firstChild);
}

button.addEventListener("click", afterClick);

input.addEventListener("keypress", afterKeyPress);

reset.addEventListener('click', resetList);

delButton.addEventListener('click', deleteList);