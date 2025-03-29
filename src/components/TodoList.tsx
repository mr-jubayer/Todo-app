import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../App";
import "./style.css";
import { useEffect, useRef, useState } from "react";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEdit = (id: number) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editTodo } : todo
    );

    setTodos(updatedTodo);
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    const deleteTodo = todos.map((todo) =>
      todo.id === id ? { ...todo } : todo
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit(todo.id);
      }}
      className="singleTodo "
    >
      {edit ? (
        <input
          type="text"
          onChange={(e) => setEditTodo(e.target.value)}
          value={editTodo}
          className="edit_field"
          ref={inputRef}
        />
      ) : (
        <li> {todo.todo} </li>
      )}
      <div>
        <span>
          <AiFillEdit
            onClick={() => {
              if (!edit) {
                setEdit(true);
              } else {
                handleEdit(todo.id);
              }
            }}
            size={20}
          />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete size={20} />
        </span>
        <span>
          <MdDone size={20} />
        </span>
      </div>
    </form>
  );
};
