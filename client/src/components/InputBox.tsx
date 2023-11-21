interface InputBoxProps {
  task: string;
  setTask: (input: string) => void;
  addTodo: () => Promise<void>;
}

export default function InputBox({ task, setTask, addTodo }: InputBoxProps) {
  return (
    <div>
      <form
        className="flex mt-3"
        onSubmit={async (e) => {
          e.preventDefault();
          setTask("");
          addTodo();
        }}
      >
        <input
          className="w-full rounded-md text-black pl-2"
          type="text"
          placeholder="add your task here ..."
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 px-4 py-2 rounded font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
}
