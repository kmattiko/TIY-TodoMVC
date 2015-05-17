(function (window) { //IIFE: Immediatly Invoked Function Expression
	'use strict';
//CONTROLLER FOR: I can add a task to list
//1. What event should I listen for? "keyup" Enter
//2.What element makes sense to listen for that event? input.new-todo
//3. What do I need to do when that event fires? See below 6 list items
		//	TO ADD A TASK:
			//1. Click on what needs to be done. ('input.new-todo')
			//2. Type the thing you need to remember (task)
			//3. Press "Enter" key
			//4. ROBOT: save the (task) to (taskList) (SO: It can live in an array!)
			//5. ROBOT: Update the (li) in HTML format (SO: user can see it!)
						//adding (li) to the (ul.todo-list > li) whole list view for user
			//6. ROBOT: remove the typed (task) from (input.new-todo)

var newTodoInput = document.querySelector('input.new-todo');
var deleteButtons = document.querySelectorAll('button.destroy');
var editTask = document.querySelectorAll('li');
var deleteTask = document.querySelector('ul.todo-list');

newTodoInput.addEventListener('keyup', function addTodoController(event) {
	if ( event.keyCode !== 13) return;

		var task = newTodoInput.value;

	var todoCountElement = document.querySelector('span.todo-count');

		todos.addTaskToList(task, todos.taskList);

		newTodoInput.value = "";

	{
	var todoCountText = todos.taskList.length + 'Item';

	if (todos.taskList.length === 1) {
		todoCountText  += 'left';
	} else {
		todoCountText += 's Left';
	};
};

	todoCountElement.text = todoCountText;
	//TODO add a <li> representation of 'task'

	document.querySelector('ul.todo-list').innerHTML +=
	(
		"<li> Hello Clarise:" + task +
		"</li>"
	);

	console.log(todos.taskList);
	console.log(todos.taskList.length);

	deleteTask.addEventListener('mouseover', function() {
		console.log("hello");
	});

//var task = document.querySelector('input.new-todo').value;
	//	todos.taskList.push(task);
	//	document.querySelector('ul.todo-list').textContent = todos.taskList;
	//	document.querySelector('input.new-todo').value = "";
	//	if (todos.tasklist.length === 1) {
	//		document.querySelector('span.todo-count').textContent = (todo.taskList.length +" "+ 'Item Left');
	//	} else {
	//		document.querySelector('span.todo-count').textContent = (todos.taskList.Length +" "+ 'Items Left');
	//	};
	//var deleteTask = document.querySelector('ul.todo-list');
	//deleteTask.addEventListener('mouseover', function() {
		//console.log("hello");
	//});


_.forEach(deleteTaskButtons, function(element, index, deleteButtons) {
		element.addEventListener('click', function(){
			console.log("clicky");
		});
	});

_.forEach(editTask, function(element, index, editTask) {
		element.addEventListener('dblclick', function() {
			console.log("Click All")
		});
	});

//todos.addTaskToList=
document.querySlector('ul.todo-list > li').textContent

});
})(window);


//REMOVE A TASK:
	//Mouseover event to get the 'x'
	//Listen for when mouseover is in (ul.todo-lis > li) section
	//Show the 'x'

	//Click event
	//In the (li) on the 'x' button
	//Remove text from box
