"use strict";

import { addTask } from "./todo.js";
import { saveTasks, getTasks } from "./storage.js";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage on startup
const tasks = getTasks();
tasks.forEach(task => addTask(task, taskList));

// Add task on button click
addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task, taskList);
        tasks.push(task);
        saveTasks(tasks);
        taskInput.value = "";  // Clear input field
    }
});