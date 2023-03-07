document.querySelector('#add').onclick = function () {
    var taskInput = document.querySelector('#newtask input');
    if (taskInput.value.length == 0) {
        alert("Please enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <label class="taskCheck">
                    <input type="checkbox" class="taskCheckbox">
                    <span id="taskname">
                        ${taskInput.value}
                    </span>
                </label>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        taskInput.value = ""; // clear the input field
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
};
