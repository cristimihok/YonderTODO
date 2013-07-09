
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

function getSelectedIndexList () {
	var selectedIndexes = new Array();
	for (var i = 0; i < listTodo.children.length; i++) {
		console.log(listTodo.children[i].firstChild.lastChild.value);
	}
		
}

var deleteHandler = function(e){
	listTodo.firstChild.lastChild.value
}
	
inputTodo.addEventListener('keypress', addHandler, false);
delBtn.addEventListener('click', deleteHandler, false);