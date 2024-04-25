function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`col-span-1 rounded-md shadow-md shadow-slate-400 bg-blue-500 text-white p-4 sm:px-5 ${
        label === "="
          ? "col-span-3 bg-emerald-500 text-black font-bold text-2xl"
          : label === "Del"
          ? "bg-red-500"
          : label === "Clear"
          ? " bg-red-500"
          : ""
      }`}
    >
      {label}
    </button>
  );
}
export default Button;
