"use strict";

document.addEventListener("DOMContentLoaded", loadTasks);
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  if (taskText === "") return;
  var task = {
    text: taskText,
    completed: false
  };
  saveTask(task);
  renderTask(task);
  taskInput.value = "";
}
function renderTask(task) {
  var li = document.createElement("li");
  li.classList.add("todo-item");
  if (task.completed) li.classList.add("todo-item--checked");
  li.innerHTML = "\n                <span class=\"todo-item__description\">".concat(task.text, "</span>\n                <button class=\"todo-item__delete\">DELETE</button>\n            ");
  li.addEventListener("click", function () {
    task.completed = !task.completed;
    li.classList.toggle("todo-item--checked");
    updateTasks();
  });
  li.querySelector(".todo-item__delete").addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    updateTasks();
  });
  document.getElementById("taskList").appendChild(li);
}
function saveTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(renderTask);
}
function updateTasks() {
  var tasks = [];
  document.querySelectorAll(".todo-item").forEach(function (li) {
    var text = li.querySelector(".todo-item__description").innerText;
    var completed = li.classList.contains("todo-item--checked");
    tasks.push({
      text: text,
      completed: completed
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}