import { useRef, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { add } from "./feature/todoSlice";

const InputField: React.FC = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(
          add({
            id: Date.now(),
            todo,
            isDone: false,
          })
        );
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        className="input_Box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className="submit_btn">Go</button>
    </form>
  );
};

export default InputField;
