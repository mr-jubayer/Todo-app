import { useRef, useState } from "react";
import "./style.css";
import { Action } from "../App";

interface props {
  dispatch: React.ActionDispatch<[action: Action]>;
}

const InputField: React.FC<props> = ({ dispatch }) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>("");

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({ type: "add", payload: todo });
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
