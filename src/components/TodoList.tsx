import { Todo } from "../App";
import "./style.css";

interface props {
  todos: Todo[];
}

const TodoList: React.FC<props> = ({ todos }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;

const SingleTodo: React.FC<{
  todo: Todo;
}> = ({ todo }) => {
  return (
    <div className="singleTodo">
      <li> {todo.todo} </li>
    </div>
  );
};
