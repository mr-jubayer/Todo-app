import { Action, Todo } from "../App";
import SingleTodo from "./Signklds";
import "./style.css";

interface props {
  todos: Todo[];
  dispatch: React.ActionDispatch<[action: Action]>;
}

const TodoList: React.FC<props> = ({ todos, dispatch }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
