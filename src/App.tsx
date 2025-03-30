import { useReducer } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type Action =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number }
  | { type: "update"; payload: { id: number; updatedTodo: string } };

const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.payload,
          isDone: false,
        },
      ];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "update":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.updatedTodo }
          : todo
      );

    default:
      throw new Error("Unknown action!");
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  console.log(state);

  return (
    <>
      <div>
        <h2 className="text-center">Keep Task</h2>

        <InputField dispatch={dispatch} />
        <TodoList todos={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
