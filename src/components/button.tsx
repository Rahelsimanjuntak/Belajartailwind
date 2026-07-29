import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
  children: React.ReactNode;
}

export default function ColorButton({ color, children }: Props) {
  const { activeColor, setActiveColor } = useColorStore();

  const active = activeColor === color;

  return (
    <button
      onClick={() => setActiveColor(color)}
      className={`px-4 py-2 rounded-md font-semibold transition
        ${
          active
            ? color === "blue"
              ? "bg-blue-500 text-white"
              : "bg-red-500 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
    >
      {children}
    </button>
  );
}