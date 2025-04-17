const API_URL = "http://localhost:5000/api/todos";

async function addTodo() {
  const input = document.getElementById("todoInput");
  const title = input.value.trim();
  if (!title) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  input.value = "";
  loadTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTodos();
}

async function editTodo(id, oldTitle) {
  const newTitle = prompt("Изменить задачу:", oldTitle);
  if (newTitle && newTitle !== oldTitle) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle })
    });
    loadTodos();
  }
}

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.title;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редактировать";
    editBtn.onclick = () => editTodo(todo._id, todo.title);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELET";
    deleteBtn.onclick = () => deleteTodo(todo._id);

    li.append(" ", editBtn, " ", deleteBtn);
    list.appendChild(li);
  });
}

window.onload = loadTodos;
