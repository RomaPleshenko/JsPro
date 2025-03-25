
        $(document).ready(function() {
            loadTasks();
    
            $('#taskInput').keydown(function(event) {
                if (event.key === "Enter") {
                    event.preventDefault(); 
                    $('#addTaskBtn').click(); 
                }
            });
    
            $('#addTaskBtn').click(function() {
                let taskText = $('#taskInput').val().trim();
                if (taskText !== "") {
                    addTask(taskText);
                    $('#taskInput').val('');
                    $('#addTaskModal').modal('hide');
                }
            });
    
            $(document).on('click', '.view-task', function() {
                let taskText = $(this).closest('.todo-item').find('.task-text').text();
                $('#taskText').text(taskText);
                $('#taskViewModal').modal('show');
            });
    
            $(document).on('click', '.delete-task', function() {
                let taskText = $(this).closest('.todo-item').find('.task-text').text();
                removeTask(taskText);
                $(this).closest('.todo-item').remove();
            });
        });
    
        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(task => {
                addTask(task, false);
            });
        }
    
        function addTask(taskText, save = true) {
            let taskItem = $(`
                <div class="todo-item">
                    <span class="task-text">${taskText}</span>
                    <div>
                        <button class="btn btn-info btn-sm view-task">Просмотр</button>
                        <button class="btn btn-danger btn-sm delete-task">Удалить</button>
                    </div>
                </div>
            `);
            $('#todoList').append(taskItem);
    
            if (save) {
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
    
        function removeTask(taskText) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }