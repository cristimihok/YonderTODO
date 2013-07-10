
var listTodo = document.getElementById('list');
var delBtn = document.getElementById('btn');	
var selAllBtn = document.getElementById('btn1');
var inputTodo = document.getElementById('newTodo');
var bottomListItem = document.getElementById('bottomListItem');
var remainingTxt = document.getElementById('remainingTxt');

var selectState = false;

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

function createDiv(){
	var newDiv = document.createElement('DIV');			
	var newListItem = createListItem();	
	newDiv.id = 'listDiv';
	newDiv.appendChild(newListItem);
	return newDiv;
}

function getSelectedItemsList () {
	var selectedItems = new Array();
	for (var i = 0; i < listTodo.children.length; i++) {
		if (listTodo.children[i].children[0].children[0].checked){
			selectedItems.push(listTodo.children[i]);
		}		
	}
	return selectedItems;		
}

function toggleBotoomLI(state){
	bottomListItem.style.visibility = state;
}

function getRemainingItems(){
	var remainingItems = listTodo.children.length;
	return remainingItems;
}


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




	
inputTodo.addEventListener('keypress', addHandler, false);
delBtn.addEventListener('click', deleteHandler, false);
selAllBtn.addEventListener('click', selectAllHandler, false);
