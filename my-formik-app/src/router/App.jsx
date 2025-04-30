import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.task || values.task.trim().length < 5) {
        errors.task = "Минимальная длина — 5 символов";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      setTodos([...todos, values.task]);
      resetForm();
    },
  });

  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Список дел</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <input
            id="task"
            name="task"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.task}
            placeholder="Введите задание"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.task && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.task}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded shadow"
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



