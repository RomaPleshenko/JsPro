import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("на странице есть заголовок 'Список задач'", () => {
    render(<App />);
    const headingElement = screen.getByText(/Список задач/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("в поле ввода можно вводить цифры и буквы", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Новая задача.../i);
    fireEvent.change(input, {
      target: {
        value: "Купить хлеб 123",
      },
    });
    expect(input).toHaveValue("Купить хлеб 123");
  });

  test("не добавляет задачу, если поле пустое", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Новая задача.../i);
    const button = screen.getByText(/добавить/i);
    const totalTasks = screen.getByText(/Всего задач:/i);

    fireEvent.change(input, {
      target: {
        value: "",
      },
    });
    fireEvent.click(button);

    expect(totalTasks).toHaveTextContent("Всего задач: 0");

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("добавляет новую задачу после ввода текста", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Новая задача.../i);
    const button = screen.getByText(/добавить/i);

    fireEvent.change(input, {
      target: {
        value: "Новая тестовая задача",
      },
    });
    fireEvent.click(button);

    expect(screen.getByText("Новая тестовая задача")).toBeInTheDocument();
    const totalTasks = screen.getByText(/Всего задач:/i);
    expect(totalTasks).toHaveTextContent("Всего задач: 1");
  });

  test("поле очищается после добавления задачи", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Новая задача.../i);
    const button = screen.getByText(/добавить/i);

    fireEvent.change(input, {
      target: {
        value: "Задача для очистки",
      },
    });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
