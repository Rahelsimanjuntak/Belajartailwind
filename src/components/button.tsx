import clsx from "clsx";
import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
  children: React.ReactNode;
  mode: "zustand" | "usestate";
  localColor?: "blue" | "red" | null;
  onLocalChange?: (color: "blue" | "red") => void;
}

function ColorButton({ color, children, mode, localColor, onLocalChange }: Props) {
  const { activeColor, setActiveColor } = useColorStore();

  const active = mode === "zustand"
    ? activeColor === color
    : localColor === color;

  const handleClick = () => {
    if (mode === "zustand") {
      setActiveColor(color);
    } else {
      onLocalChange?.(color); // send color
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold transition duration-300",
        {
          "bg-blue-500 text-white hover:bg-blue-600": active && color === "blue",
          "bg-red-500 text-white hover:bg-red-600": active && color === "red",
          "bg-gray-300 text-gray-700 hover:bg-gray-400": !active,
        }
      )}
    >
      {children}
    </button>
  );
}

export default ColorButton;