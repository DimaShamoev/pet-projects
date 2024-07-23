let addTask1 = document.querySelector(".add-first-task");
let addTaskInputBlock = document.querySelector(".add-task-block");
let addTaskInput = document.querySelector(".add-text-input-value");
let toDoList = document.querySelector(".to-do-list");
let listType = document.querySelector(".to-do-list-type");
let tasks = [];
let completedTasks = [];

addTask1.addEventListener("click", () => {
    addTaskInputBlock.classList.add("active");
});

let updateAddTaskButtonState = () => {
    if (tasks.length > 0) {
        addTask1.classList.remove('active');
    } else {
        addTask1.classList.add("active");
    }
}

updateAddTaskButtonState();

addTaskInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        let taskText = addTaskInput.value.trim();
        if (taskText.length > 0) {
            addTaskInputBlock.classList.remove("active");
            tasks.push(taskText);
            completedTasks.push(false);
            addTaskInput.value = "";
            updateTaskList();
        }
    }
});

document.querySelector(".exit-icon").addEventListener("click", () => {
    addTaskInputBlock.classList.remove("active");
});


let updateTaskList = () => {
    toDoList.innerHTML = "";

    tasks.forEach((taskText, index) => {
        let taskBlock = createTaskElement(taskText, index);
        toDoList.appendChild(taskBlock);
    });

    updateAddTaskButtonState();
}

let createTaskElement = (taskText, index) => {
    let taskBlock = document.createElement("div");
    taskBlock.className = "task-block";

    let taskState = document.createElement("div");
    taskState.className = "task-state";
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check-box-state";
    checkBox.checked = completedTasks[index];
    taskState.appendChild(checkBox);

    let dots = document.createElement("div");
    dots.className = "dots";
    dots.textContent = "::";

    let taskTextElement = document.createElement("div");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;

    checkBox.addEventListener('change', () => {
        completedTasks[index] = checkBox.checked;
        updateTaskList();
    });

    taskBlock.appendChild(taskState);
    taskBlock.appendChild(dots);
    taskBlock.appendChild(taskTextElement);

    return taskBlock;
}

let displayFilteredTasks = (completed) => {
    toDoList.innerHTML = "";

    tasks.forEach((taskText, index) => {
        if (completedTasks[index] === completed) {
            let taskBlock = createTaskElement(taskText, index);
            toDoList.appendChild(taskBlock);
        }
    });
}

let bottomBtns = document.querySelectorAll(".to-do-bottom-btns i");
bottomBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        bottomBtns.forEach((b) => b.classList.remove("checked-btn"));
        btn.classList.add("checked-btn");

        if (btn.classList.contains("bx-list-ul")) {
            listType.textContent = "All Tasks";
            updateTaskList();
        } else if (btn.classList.contains("bx-check-square")) {
            listType.textContent = "Completed";
            displayFilteredTasks(true);
        } else if (btn.classList.contains("bx-square-rounded")) {
            listType.textContent = "Not Completed";
            displayFilteredTasks(false);
        }
    });
});


let addTask2 = document.querySelector(".bx-plus");
addTask2.addEventListener("click", () => {
    addTaskInputBlock.classList.add("active");
});

let deleteAllBtn = document.querySelector(".detele-tasks-btn");
deleteAllBtn.addEventListener("click", () => {
    tasks = [];
    completedTasks = [];
    updateTaskList();
});

updateTaskList();
