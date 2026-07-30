import { useColorStore } from "../routes/stores/colorStore";

function ColorBox() {
  const { activeColor } = useColorStore();

  const active = activeColor !== null;

  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      {/* Shadow animate-ping */}
      {active && (
        <div
          className={`absolute inset-0 rounded-md animate-ping opacity-60
            ${
              activeColor === "blue"
                ? "bg-blue-400"
                : "bg-red-400"
            }`}
        />
      )}

      {/* box */}
      <div
        className={`relative w-6 h-6 rounded-md border transition-all duration-300
          ${
            activeColor === "blue"
              ? "bg-blue-500 border-blue-600 shadow-lg shadow-blue-500/60"
              : activeColor === "red"
              ? "bg-red-500 border-red-600 shadow-lg shadow-red-500/60"
              : "bg-gray-200 border-gray-300"
          }`}
      />
    </div>
  );
}

export default ColorBox;