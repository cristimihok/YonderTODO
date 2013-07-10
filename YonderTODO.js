
var listTodo = document.getElementById('list');
var delBtn = document.getElementById('btn');	
var selAllBtn = document.getElementById('btn1');
var inputTodo = document.getElementById('newTodo');
var bottomListItem = document.getElementById('bottomListItem');
var remainingTxt = document.getElementById('remainingTxt');

var selectState = false;
//creates a new list item <li>
function createListItem(){
	var newListItem = document.createElement('LI');
	var newListCheckBox = document.createElement('INPUT');
	newListCheckBox.type = 'checkbox';
	newListCheckBox.id = 'listCB';
	var newTextNode = document.createTextNode(inputTodo.value);
	newListItem.appendChild(newListCheckBox);
	newListItem.appendChild(newTextNode);
	return newListItem;
}

//creates the DIV that contains the list item
function createDiv(){
	var newDiv = document.createElement('DIV');			
	var newListItem = createListItem();	
	newDiv.id = 'listDiv';
	newDiv.appendChild(newListItem);
	return newDiv;
}

//returns an ARRAY with selected objects from TODO list
function getSelectedItemsList () {
	var selectedItems = new Array();
	for (var i = 0; i < listTodo.children.length; i++) {
		if (listTodo.children[i].children[0].children[0].checked){
			selectedItems.push(listTodo.children[i]);
		}		
	}
	return selectedItems;		
}

//sets the state for the checkboxes from TODO list
function toggleBotoomLI(state){
	bottomListItem.style.visibility = state;
}

//returns the item number from TODO list
function getRemainingItems(){
	var remainingItems = listTodo.children.length;
	return remainingItems;
}

//adds a new TODO item in <ul>
var addHandler = function(e){
	if (inputTodo.value){
		if (e.keyCode == 13){
			toggleBotoomLI('visible');		
			var newDiv = createDiv();	
			listTodo.appendChild(newDiv);
			newTodo.value = "";
		}	
	}
	remainingItemsHandler();
	
}

//deletes the selected items from list <ul>
var deleteHandler = function(e){
	var i;
	var selectedItems = getSelectedItemsList();
	for (i = 0; i < selectedItems.length; ++i){
		listTodo.removeChild(selectedItems[i]);
	}
	if (!listTodo.children.length){
		toggleBotoomLI('hidden');
		newTodo.value = "";
	}
	remainingItemsHandler();
}

//sets the state of checkboxes from TODO list <ul>
var selectAllHandler = function (e) {
	if (selectState){
		selectState = false;
	}else{
		selectState = true;
	}
	for (var i = 0; i < listTodo.children.length; i++) {
		listTodo.children[i].children[0].children[0].checked = selectState;				
	}
}


var remainingItemsHandler = function (e) {
	remainingTxt.innerHTML = 'remaining: ' + getRemainingItems();
}

//adding listeners to elements from DOM	
inputTodo.addEventListener('keypress', addHandler, false);
delBtn.addEventListener('click', deleteHandler, false);
selAllBtn.addEventListener('click', selectAllHandler, false);
