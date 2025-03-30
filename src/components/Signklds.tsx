import { useEffect, useRef, useState } from "react";
import { Action, Todo } from "../App";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const SingleTodo: React.FC<{
  todo: Todo;
  dispatch: React.ActionDispatch<[action: Action]>;
}> = ({ todo, dispatch }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEdit = (id: number) => {
    dispatch({ type: "update", payload: { id, updatedTodo: editTodo } });
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
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
        <span>
          <AiFillEdit
            onClick={() => {
              if (!todo.isDone) {
                if (!edit) {
                  setEdit(true);
                } else {
                  handleEdit(todo.id);
                }
              }
            }}
            size={20}
          />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete size={20} />
        </span>
        <span
          onClick={() => {
            if (!edit) {
              handleDone(todo.id);
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
