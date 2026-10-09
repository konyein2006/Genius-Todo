export default function Header({ theme, handleTheme }) {
  return (
    <div className="flex items-center justify-between w-full py-5 border-b border-b-zinc-300 dark:border-b-zinc-500">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl ">
        Genius Todo
      </h1>
      <div
        className={`border dark:border-white rounded-lg px-2 py-1 flex box-shadow`}
      >
        <button
          onClick={handleTheme}
          className={`cursor-pointer text-zinc-950 hover:text-zinc-70 text-md sm:text-lg rounded-md px-1  dark:bg-white ${theme === "dark" && "dark:bg-white "}`}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
        <button
          onClick={handleTheme}
          className={`cursor-pointer text-md sm:text-lg rounded-md px-1  ${theme === "light" && "bg-black text-white "}`}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  );
}
