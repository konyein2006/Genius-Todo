import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import dayjs from "dayjs";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  });
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("genius-todo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("genius-todo", JSON.stringify(todos));
  }, [todos]);

  function handleCorrection(id) {
    const tartTodo = todos.find((todo) => todo.id === id);
    if (!tartTodo) return;
    setInputText(tartTodo.todo);
    handleDelete(id);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  }

  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleAddButton() {
    if (!inputText.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      todo: inputText,
      complete: false,
      time: dayjs(),
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputText("");
  }

  function handleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }
  return (
    <div className="flex flex-col items-center max-w-2xl h-screen p-5 mx-auto">
      <Header theme={theme} handleTheme={handleTheme} />
      <Main
        todos={todos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleCorrection={handleCorrection}
      />
      <Footer
        handleInput={handleInput}
        handleAddButton={handleAddButton}
        inputText={inputText}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
