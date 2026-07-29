import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
  children: React.ReactNode;
}

export default function ColorButton({ color, children }: Props) {
  const { setActiveColor } = useColorStore();

  return (
    <button
      onClick={() => setActiveColor(color)}
      className="px-4 py-2 rounded-md font-semibold transition bg-gray-300 text-gray-700 hover:bg-gray-400"
    >
      {children}
    </button>
  );
}