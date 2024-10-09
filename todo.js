"use strict";

// Function to add a task to the list
export function addTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => taskList.removeChild(li);
    li.appendChild(removeBtn);
}