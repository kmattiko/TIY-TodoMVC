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

newTodoInput.addEventListener('keyup', function addTodoController(event) {
	if ( event.keyCode === 13){
		var task = document.querySelector('input.new-todo').value;
		todos.taskList.push(task);
		console.log(todos.taskList);
	}
});

})(window);












/*
	document.head.parentElement.className = "js";

	document.querySelector('.new-todo')

	//var that = this;
	//this.ENTER_KEY = 13;

	('.new-todo').addEventListener('keyCode.keyup', function (){
		console.log(arguments);
	});

*/
