import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
  children: React.ReactNode;
}

function ColorButton({ color, children }: Props) {
  const { activeColor, setActiveColor } = useColorStore();

  // Mengecek apakah button ini sedang aktif
  const active = activeColor === color;

  return (
    <button
      onClick={() => setActiveColor(color)}
      className={`px-4 py-2 rounded-md font-semibold transition
        ${
          active
            ? color === "blue"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
    >
      {children}
    </button>
  );
}

export default ColorButton;