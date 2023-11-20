interface TaskProps {
  id: number;
  name: string;
}

export default function Task({ id, name }: TaskProps) {
  return (
    <div className="mt-3 grid grid-cols-5 gap-1 items-center">
      <div className="col-span-3 bg-yellow-600 py-1 rounded-md">
        <div className="grid grid-cols-5">
          <button className=" col-span-1 bg-violet-800 rounded-full ml-1 w-6 h-6">
            X
          </button>
          <p className="col-span-4">{name}</p>
        </div>
      </div>
      <button className="px-2 py-1 bg-green-500 rounded-md font-bold max-h-8">
        edit
      </button>
      <button
        className="px-2 py-1 bg-red-500 rounded-md font-bold max-h-8"
        onClick={(id) => {
          console.log(id.target);
          // handleDelete(id);
        }}
      >
        delete
      </button>
    </div>
  );
}
