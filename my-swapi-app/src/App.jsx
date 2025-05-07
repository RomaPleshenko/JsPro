import React, { useEffect, useState } from "react";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const fetchSwapiData = createAsyncThunk(
  "swapi/fetch",
  async (id = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://swapi.py4e.com/api/people/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка запроса");
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    clearTodos: () => [],
  },
});

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { addTodo, clearTodos } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    swapi: swapiSlice.reducer,
  },
});

function TodoApp() {
  const [text, setText] = useState("");
  const [characterId, setCharacterId] = useState(1);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { data: swapi, loading, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    dispatch(fetchSwapiData(characterId));
  }, [dispatch, characterId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleClear = () => {
    dispatch(clearTodos());
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
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 bg-gray-50 rounded border shadow-sm"
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <footer className="text-sm text-gray-600 flex justify-between items-center mb-4">
          <span>Всего задач: {todos.length}</span>
          <button
            onClick={handleClear}
            className="ml-4 text-red-500 border border-red-300 rounded-lg px-2 py-1 hover:bg-red-50"
          >
            Очистить
          </button>
        </footer>

        {/* Поле выбора ID персонажа */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            ID персонажа из SWAPI:
          </label>
          <input
            type="number"
            min="1"
            value={characterId}
            onChange={(e) => setCharacterId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Отображение состояния загрузки и ошибки */}
        {loading && (
          <p className="mt-2 text-blue-600">Загрузка данных SWAPI...</p>
        )}
        {error && <p className="mt-2 text-red-600">Ошибка: {error}</p>}

        {swapi && !loading && !error && (
          <div className="mt-2 text-sm text-gray-800">
            <strong>Имя из SWAPI:</strong> {swapi.name}
          </div>
        )}
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
