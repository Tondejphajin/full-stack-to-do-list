import { createContext } from "react";

export const editDeleteContext = createContext<{
  editTodo: () => void;
  deleteTodo: () => void;
}>({
  editTodo: () => {},
  deleteTodo: () => {},
});
