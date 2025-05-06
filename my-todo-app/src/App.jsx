import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
  },
});

const { addTodo } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

function TodoApp() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Список задач</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Новая задача..."
            className="flex-1 border border-gray-300 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Добавить
          </button>
        </form>
        <ul className="space-y-2 mb-4">
          {todos.map(todo => (
            <li key={todo.id} className="p-2 bg-gray-50 rounded border shadow-sm">{todo.text}</li>
          ))}
        </ul>
        <footer className="text-sm text-gray-600">Всего задач: {todos.length}</footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
