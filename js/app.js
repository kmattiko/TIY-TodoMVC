(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

})(window);

//What needs to be done will allow typing but will not allow adding
    //Something needs added for the enter key
		//Will need to be pushed into the Array with the list.

//ENTER needs defined, shows up in orange like it's a number
//tried pulling JS from original TodoMVC file and applying theories
//Have yet to get the enter key to work.
//At least I've gotten past some errors

	document.head.parentElement.className = "js";

	var addTodos = document.querySelector('header')

	var that = this;
	this.ENTER_KEY = 13;

	addTodos.addEventListener(this.ENTER_KEY, function view(template){
		console.log("whatever");
	})



/*

			var KeyEvent = {
				DOM_VK_RETURN: 13,
			};
		}

		addTodos.addEventListener(KeyEvent(13), function(){
			console.log("whatever");
		})

		/*
		function (e) {
		    var code = check.addEventListener;
		    //Up arrow pressed
		    if (code == 13) {
		        console.log("You pressed the Up arrow key");
					}
		    else {
		        console.log("You pressed some other key I don't really care about.");
				}
/*				http://stackoverflow.com/questions/12241113/whats-the-best-way-to-create-key-events-in-html5-canvas*/


/*document.head.parentElement.className = "js";

var addTodos = document.querySelector('header')

addTodos.addEventListener('keydown', function(){
	console.log("whatever");
})

// function (addTodos.addEventListener)
// 	if (e.keyCode == 13) {
// 		(this).appendTo('view');
// 	};


/*function(addTodos, index, addTodos) {
	addTodos.addEventListener(e.keyCode == 13);
	(this).appendTo('view');
};

/*(".like-button").click(function() {
		 (this).toggle("active");
		  });
		};
		(document).ready(addTodos);
		var elements = document.querySelectorAll('h3');

_.forEach(elements, function(element, index, elements){
    element.addEventListener('click', function(){
        console.log(elements, index, element);
        element.parentElement.classList.toggle('cbp-ntopen');
    });
});

function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    }
}
*/
