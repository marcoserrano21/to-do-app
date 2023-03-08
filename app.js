// document.querySelector('#add').onclick = function () {
//     var taskInput = document.querySelector('#newtask input');
//     if (taskInput.value.length == 0) {
//         alert("Please enter a Task");
//     } else {
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <label class="taskCheck">
//                     <input type="checkbox" class="taskCheckbox">
//                     <span id="taskname">
//                         ${taskInput.value}
//                     </span>
//                 </label>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;
//         taskInput.value = ""; // clear the input field

//         // Scroll to the top of the container
//         var container = document.querySelector('.container');
//         window.scrollTo({
//             top: container.offsetTop,
//             behavior: 'smooth'
//         });

//         var current_tasks = document.querySelectorAll(".delete");
//         for (var i = 0; i < current_tasks.length; i++) {
//             current_tasks[i].onclick = function () {
//                 this.parentNode.remove();
//             }
//         }
//     }
    
// };


var taskCount = 0;

// Add a keydown event listener to the input field
var taskInput = document.querySelector('#newtask input');
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // Check if the Enter key is pressed
    event.preventDefault(); // Prevent the default behavior of the Enter key
    document.querySelector('#add').click(); // Simulate a click on the "Add" button
  }
});

// Add a click event listener to the "Add" button
document.querySelector('#add').onclick = function () {
    var taskInput = document.querySelector('#newtask input');
    if (taskInput.value.length == 0) {
        alert("Please enter a Task");
    } else {
        // Increment the task count and calculate the amount to move the container up
        taskCount++;
        var containerOffset = -10 * taskCount;

        // Add the new task to the task list
        var taskHTML = `
            <div class="task">
                <div class="taskCheck">
                    <input type="checkbox" class="taskCheckbox">
                    <span class="taskname">
                        ${taskInput.value}
                    </span>
                </div>
                <div class="taskButtons">
                    <button class="editButton">Edit</button>
                    <button class="deleteButton">Delete</button>
                </div>
            </div>
        `;
        document.querySelector('#tasks').insertAdjacentHTML('beforeend', taskHTML);
        taskInput.value = ""; // clear the input field

        // Move the container up by adjusting its margin
        document.querySelector('.container').style.marginTop = containerOffset + 'px';

        // Add click event listeners to the delete buttons and edit buttons of all tasks
        var current_tasks = document.querySelectorAll(".task");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].querySelector(".deleteButton").onclick = function () {
                // Decrement the task count and recalculate the container offset
                taskCount--;
                containerOffset = -10 * taskCount;

                // Remove the task from the task list
                this.parentNode.parentNode.remove();

                // Move the container back down by adjusting its margin
                document.querySelector('.container').style.marginTop = containerOffset + 'px';
            }

            current_tasks[i].querySelector(".editButton").onclick = function () {
                // Get the task name and prompt the user to enter a new task name
                var taskName = this.parentNode.parentNode.querySelector(".taskname");
                var newTaskName = prompt("Enter a new task name:", taskName.textContent);

                // Update the task name if the user entered a new name
                if (newTaskName !== null && newTaskName.trim() !== "") {
                    taskName.textContent = newTaskName.trim();
                }
            }
        }
    }
};
