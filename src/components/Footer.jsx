export default function Footer({
  handleInput,
  handleAddButton,
  inputText,
  inputRef,
}) {
  return (
    <div className="flex gap-5 w-full px-5 pb-5">
      <input
        className="border rounded-lg p-3 flex-1 text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-950 dark:placeholder:text-zinc-100  text-md sm:text-lg"
        value={inputText}
        ref={inputRef}
        type="text"
        placeholder="Add todo..."
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddButton();
            e.target.blur();
          }
        }}
      />
      <button
        onClick={handleAddButton}
        className="border rounded-lg px-3 py-2 font-bold cursor-pointer text-sm sm:text-md hover:shadow-sm shadow-zinc-100 bg-zinc-950 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
      >
        ADD
      </button>
    </div>
  );
}
