document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();
            if (taskText === "") return;

            const task = { text: taskText, completed: false };
            saveTask(task);
            renderTask(task);
            taskInput.value = "";
        }

        function renderTask(task) {
            const li = document.createElement("li");
            li.classList.add("todo-item");
            if (task.completed) li.classList.add("todo-item--checked");

            li.innerHTML = `
                <span class="todo-item__description">${task.text}</span>
                <button class="todo-item__delete">DELETE</button>
            `;

            li.addEventListener("click", () => {
                task.completed = !task.completed;
                li.classList.toggle("todo-item--checked");
                updateTasks();
            });

            li.querySelector(".todo-item__delete").addEventListener("click", (e) => {
                e.stopPropagation();
                li.remove();
                updateTasks();
            });

            document.getElementById("taskList").appendChild(li);
        }

        function saveTask(task) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach(renderTask);
        }

        function updateTasks() {
            const tasks = [];
            document.querySelectorAll(".todo-item").forEach(li => {
                const text = li.querySelector(".todo-item__description").innerText;
                const completed = li.classList.contains("todo-item--checked");
                tasks.push({ text, completed });
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }