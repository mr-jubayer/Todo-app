import { useSelector } from "react-redux";
import SingleTodo from "./Signklds";
import "./style.css";
import { RootState } from "./store/store";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  console.log(todos);

  return (
    <div className="todoList">
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
