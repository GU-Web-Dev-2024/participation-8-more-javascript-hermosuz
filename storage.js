"use strict";

// Function to save tasks to local storage
export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to get tasks from local storage
export function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}