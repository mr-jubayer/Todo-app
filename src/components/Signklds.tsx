import { useEffect, useRef, useState } from "react";
import { Todo } from "../App";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { deleteTodo, done, update } from "./feature/todoSlice";

const SingleTodo: React.FC<{
  todo: Todo;
}> = ({ todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = (id: number) => {
    dispatch(update({ id, todo: editTodo }));
    setEdit(false);
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
      ) : todo.isDone ? (
        <s> {todo.todo} </s>
      ) : (
        <li> {todo.todo} </li>
      )}
      <div>
        <span
          onClick={() => {
            if (!todo.isDone) {
              if (!edit) {
                setEdit(true);
              } else {
                handleEdit(todo.id);
              }
            }
          }}
        >
          <AiFillEdit size={20} />
        </span>
        <span onClick={() => dispatch(deleteTodo(todo.id))}>
          <AiFillDelete size={20} />
        </span>
        <span
          onClick={() => {
            if (!edit) {
              dispatch(done(todo.id));
            }
          }}
        >
          <MdDone size={20} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
