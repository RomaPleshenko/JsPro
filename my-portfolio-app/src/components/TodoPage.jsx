import React, { useState } from "react";
import {
  Input,
  Button,
  List,
  Checkbox,
  Space,
  Popconfirm,
  message,
} from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    } else {
      message.warning("введите задачу.");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    message.success("Задача удалена!");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    if (editingText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editingText } : todo
        )
      );
      setEditingId(null);
      setEditingText("");
      message.success("Задача обновлена!");
    } else {
      message.warning("Пожалуйста, введите текст задачи.");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Список TODO
      </h1>
      <div className="flex mb-6 max-w-md mx-auto">
        <Input
          placeholder="Добавить новую задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={addTodo}
          className="rounded-l-md"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addTodo}
          className="rounded-r-md"
        >
          Добавить
        </Button>
      </div>

      <List
        className="bg-white shadow-lg rounded-lg max-w-md mx-auto"
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            className={`px-6 py-4 border-b border-gray-200 last:border-b-0 flex items-center justify-between ${
              todo.completed ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex items-center flex-grow">
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-4"
              />
              {editingId === todo.id ? (
                <Input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onPressEnter={() => saveEdit(todo.id)}
                  onBlur={() => saveEdit(todo.id)}
                />
              ) : (
                <span
                  className={`text-lg ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <Space size="middle">
              {editingId === todo.id ? (
                <Button type="primary" onClick={() => saveEdit(todo.id)}>
                  Сохранить
                </Button>
              ) : (
                <>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => startEdit(todo)}
                    className="text-blue-500 hover:text-blue-700 border-none shadow-none"
                  />
                  <Popconfirm
                    title="Вы уверены, что хотите удалить эту задачу?"
                    onConfirm={() => deleteTodo(todo.id)}
                    okText="Да"
                    cancelText="Нет"
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      danger
                      className="text-red-500 hover:text-red-700 border-none shadow-none"
                    />
                  </Popconfirm>
                </>
              )}
            </Space>
          </List.Item>
        )}
      />
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Нет задач. Добавьте новую!
        </p>
      )}
    </div>
  );
};

export default TodoPage;
