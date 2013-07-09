
var listTodo = document.getElementById('list');
var delBtn = document.getElementById('btn');	
var inputTodo = document.getElementById('newTodo');
var i = 0;

function createListItem(){
	var newListItem = document.createElement('LI');
	var newListCheckBox = document.createElement('INPUT');
	newListCheckBox.type = 'checkbox';
	var newTextNode = document.createTextNode('  ' + inputTodo.value);
	newListItem.appendChild(newListCheckBox);
	newListItem.appendChild(newTextNode);
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
	if (inputTodo.value){
		if (e.keyCode == 13){		
			var newDiv = createDiv();	
			listTodo.appendChild(newDiv);
			newTodo.value = "";
		}	
	}
	
}

function getSelectedIndexList () {
	var selectedItems = new Array();
	for (var i = 0; i < listTodo.children.length; i++) {
		if (listTodo.children[i].children[0].children[0].checked){
			selectedItems.push(listTodo.children[i]);
		}		
		//console.log(listTodo.children[i].children[0].children[0].checked);
	}
	//console.log(selectedIndexes);
	return selectedItems;		
}

var deleteHandler = function(e){
	var i;
	var selectedItems = getSelectedIndexList();
	for (i = 0; i < selectedItems.length; ++i){
		listTodo.removeChild(selectedItems[i]);
	}
}
	
inputTodo.addEventListener('keypress', addHandler, false);
delBtn.addEventListener('click', deleteHandler, false);