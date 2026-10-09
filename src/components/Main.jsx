import dayjs from "dayjs";

export default function Main({
  todos,
  handleDelete,
  handleComplete,
  handleCorrection,
}) {
  return (
    <div className="flex flex-col flex-1 gap-5 my-10 w-full px-5 overflow-y-auto scrollbar-none">
      {todos.length < 1 && (
        <div className="font-bold text-xl sm:text-2xl md:text-3xl mx-auto text-zinc-800 dark:text-zinc-300">
          Add Todo Lists
        </div>
      )}
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="border rounded-xl px-5 py-3 flex items-center justify-between gap-3 w-full"
          >
            <input
              onChange={() => handleComplete(todo.id)}
              type="checkbox"
              checked={todo.complete}
              className={`w-5 h-5 border rounded-full cursor-pointer appearance-none ${
                todo.complete
                  ? "bg-green-500 dark:bg-green-400 border-green-300 dark:border-green-300"
                  : "bg-white dark:bg-zinc-800 border-zinc-400 dark:border-zinc-100 border-2"
              }`}
            />
            <div className="flex flex-col gap-1 flex-1">
              <p
                className={`font-bold capitalize text-md sm:text-lg md:text-xl text-zinc-950 dark:text-zinc-100 ${todo.complete && "line-through decoration-2"}`}
              >
                {todo.todo}
              </p>
              <p className="text-xs text-zinc-950 dark:text-zinc-100">
                {dayjs(todo.time).format("dddd DD,MMMM")}
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleCorrection(todo.id)}>
                <i className="fa-solid fa-pen-to-square text-md sm:text-lg md:text-xl cursor-pointer"></i>
              </button>
              <button onClick={() => handleDelete(todo.id)}>
                <i className="fa-solid fa-trash text-md sm:text-lg md:text-xl cursor-pointer"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
