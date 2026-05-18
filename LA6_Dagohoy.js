// Student Name: Dagohoy, Justin John C.
// filename: LA6_Dagohoy.js

// Comment 1: List of tasks to show on the page
let tasks = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Call Mom", completed: false }
];

// Comment 2: Function that draws the tasks on the screen
function displayTasks() {
    // Get the <ul> element to add tasks to
    const todoList = document.getElementById("todoList");

    // Comment 3: Clear the list so it doesn't repeat old tasks
    todoList.innerHTML = "";

    // Comment 4: Loop through each task in the list
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        // Comment 5: If task is done, add the "completed" style
        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        // Comment 6: Create the text part of the task
        let taskText = document.createElement("span");
        taskText.textContent = tasks[i].task;

        // Comment 7: Create a button that says "Undo" or "Complete"
        let toggleButton = document.createElement("button");
        toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";

        // Comment 8: When the button is clicked, change the task status
        toggleButton.addEventListener("click", function() {
            tasks[i].completed = !tasks[i].completed; // Comment 9: Switch true to false or false to true
            displayTasks(); // Comment 10: Redraw the list to show the change
        });

        // Comment 11: Put the text and button inside the list item
        li.appendChild(taskText);
        li.appendChild(toggleButton);

        // Comment 12: Add the list item to the main <ul> tag
        todoList.appendChild(li);
    }
}

// Comment 13: Ask for a new task when the "Add" button is clicked
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let newTask = prompt("Enter a new task: ");
    if (newTask) {
        tasks.push({ task: newTask, completed: false });
        displayTasks(); // Comment 14: Show the list with the new task added
    }
});

// Comment 15: Run the function once when the page starts
displayTasks();