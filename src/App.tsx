import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  todo: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
      },
    ]);

    setTodo("");
  };

  return (
    <>
      <div>
        <h2 className="text-center">Keep Task</h2>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
