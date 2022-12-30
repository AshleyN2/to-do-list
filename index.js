// Get references to the form and task container
const taskForm = document.getElementById('task-form');
const taskContainer = document.getElementById('task-container');

// Handle form submission
taskForm.addEventListener('submit', event => {
    event.preventDefault(); // prevent the form from refreshing the page  

    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;   

    // Reset the input value
    taskInput.value = '';   

    // Create a new task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
    <input type="checkbox" />
    <span>${task}</span>
    <button>Delete</button>
    `;  
    
    // Add a click event listener to the checkbox
    taskElement.querySelector('input[type="checkbox"]').addEventListener('click', event => {
        taskElement.classList.toggle('completed');

    }); 
    
    // Add a click event listener to the delete button
    taskElement.querySelector('button').addEventListener('click', event => {
        taskElement.remove();
    }); 
    
    // Add the task element to the task container
    taskContainer.appendChild(taskElement);
});