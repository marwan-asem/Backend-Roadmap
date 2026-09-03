// Today is: 3/9/2026
// Created by: Marwan Asem

/*
Create a JavaScript program that does this:

1. Create an empty array called tasks.
2. Create a function called addTask(title).
3. Inside the function, create a task object with:
   - id
   - title
   - done
4. Add the task object to the tasks array.
5. Return the task.
6. Add 3 tasks by calling addTask().
7. Use a for...of loop to print only the task titles.
*/

// let means the variable name "tasks" can point to another array later.
// We use let here because deleteTask() replaces tasks with a filtered array.
let tasks = [];

// This function creates one task object and stores it inside the tasks array.
function addTask(title) {
  // Each task is an object.
  const task = {
    // tasks.length tells us how many tasks are already inside the array.
    id: tasks.length + 1,

    // This uses the title value that was sent to the function.
    title: title,

    // done starts as false because the task is not completed yet.
    done: false
  };

  // push adds the new task object to the SAME tasks array.
  tasks.push(task);

  // return gives the new task back to the place that called the function.
  return task;
}

function findTask(id) {
  return tasks.find(task => task.id === id);
}

function completeTask(id) {
  const task = findTask(id);

  if (task) {
    task.done = true;
  }

  return task;
}

/*
Next step: delete a task.

In backend work, this is very common:
- create task
- find task
- update task
- delete task
*/

// filter() makes a new array.
// It keeps only the items that pass the condition.
function deleteTask(id) {
  const task = findTask(id);

  if (task) {
    tasks = tasks.filter(task => task.id !== id);
  }

  return task;
}

addTask("task 1");
addTask("task 2");
addTask("task 3");


const deleted = deleteTask(2);

console.log(deleted);
console.log(tasks);