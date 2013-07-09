
var listTodo = document.getElementById('list');
var addBtn = document.getElementById('btn');	
var inputTodo = document.getElementById('newTodo');
var i = 0;

var addHandler = function(e){
	if (e.keyCode == 13){
		var newDiv = document.createElement('DIV');			
		var newListItem = document.createElement('LI');
		newListItem.appendChild(document.createTextNode(inputTodo.value));	
		newDiv.id = 'listDiv';
		newDiv.appendChild(newListItem);	
		listTodo.appendChild(newDiv);
	}	
}
	
inputTodo.addEventListener('keypress', addHandler, false);
