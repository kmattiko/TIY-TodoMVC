+var expect = require('chai').expect;
+//I can list my tasks
+
+var taskList = [ ];
+
+//function listTasks(){
+//for (var i = 0; i < taskList.length; i++) {
+//console.log(cities[i])
+//};
+
+//I can add a task
+
+function addTaskToList(task, list){
+  //what is the task? @peram task
+  //where does the task go? @peram list
+  //what order or priority? lowest, on the bottom
+  //.push will put it on
+  return list.push(task);
+}
+
+
+expect(taskList.length).to.equal(0);
+addTaskToList("Remember the milk", taskList);
+expect(taskList[0]).to.equal("Remember the milk");
+expect(taskList.length).to.equal(1);
+
+expect(taskList.length).to.equal(1);
+addTaskToList("Take out the trash", taskList);
+expect(taskList[1]).to.equal("Take out the trash");
+expect(taskList.length).to.equal(2);
+
+
+
+for (var i = 0; i < taskList.length; i++) {
+console.log(taskList[i])
+};
+
+
+//figure out the push command to get them to add correctly.
+//Can I add a 'x' in front of a task when its completed
+var normalTodo = ["Remember the milk", "Take out the trash", "Shave the cat"];
+var highTodo = ("x" + normalTodo[0]);
+
+expect(normalTodo[0]).to.equal("Remember the milk");
+expect(highTodo).to.equal("x" + normalTodo[0]);
+
