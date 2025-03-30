import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    done(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },

    update(state, action) {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, deleteTodo, done, update } = todoSlice.actions;
