import Task from "./Task";
import { TodoItem } from "./TodoApp";

interface TodoListProps {
  todos: Array<TodoItem>;
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <>
      {todos.map((todo) => {
        return <Task key={todo.id} name={todo.name} id={todo.id} />;
      })}
    </>
  );
}
