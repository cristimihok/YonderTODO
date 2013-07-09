
var listTodo = document.getElementById('list');
var delBtn = document.getElementById('btn');	
var inputTodo = document.getElementById('newTodo');
var i = 0;

function createListItem(){
	var newListItem = document.createElement('LI');
	var newListCheckBox = document.createElement('INPUT');
	newListCheckBox.type = 'checkbox';
	var newTextNode = document.createTextNode((++i) + ': ' + inputTodo.value);
	newListItem.appendChild(newTextNode);
	newListItem.appendChild(newListCheckBox);
	return newListItem;
}

function createDiv(){
	var newDiv = document.createElement('DIV');			
	var newListItem = createListItem();	
	newDiv.id = 'listDiv';
	newDiv.appendChild(newListItem);
	return newDiv;
}

var addHandler = function(e){
	if (e.keyCode == 13){		
		var newDiv = createDiv();	
		listTodo.appendChild(newDiv);
	}	
}

var deleteHandler = function(e){
	var test = document.getElementById('list');
	test.removeChild(test.firstChild);
}
	
inputTodo.addEventListener('keypress', addHandler, false);
delBtn.addEventListener('click', deleteHandler, false);