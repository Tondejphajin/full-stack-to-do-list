import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import TodoList from "./TodoList";
import axios from "axios";

export const url = "http://localhost:3333/todo";

export interface TodoItem {
  id: number;
  name: string;
  delete: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => {
        setTodos(res.data);
      });
    };

    fetchData();
  }, []);

  const addTodo = async () => {
    const res = await axios.post(url, {
      name: task,
    });

    setTodos([...todos, res.data]);
  };

  const editTodo = async () => {};

  const deleteTodo = async () => {};

  return (
    <div className="flex justify-center bg-[#2a2d2f] max-w-md rounded-lg mt-24 py-5 mx-auto">
      <div className="flex">
        <div className="w-96">
          <h1 className="font-extrabold text-3xl">Todo List</h1>
          <InputBox task={task} setTask={setTask} addTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}
