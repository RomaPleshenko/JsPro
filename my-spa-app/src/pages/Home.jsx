import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Список справ</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Добавить задачу"
        className="border p-1"
      />
      <button onClick={addTodo} className="ml-2 p-1 bg-blue-500 text-white">Додати</button>
      <ul className="mt-4">
        {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
      </ul>
    </div>
  );
}