import Task from "./Task";

export default function TodoList(props: any) {
  const todos = props.todos;

  return (
    <>
      {todos.map((todo) => {
        return <Task key={todo.id} name={todo.name} id={todo.id} />;
      })}
    </>
  );
}
