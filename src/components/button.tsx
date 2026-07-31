import clsx from "clsx";
import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
  children: React.ReactNode;
}

function ColorButton({ color, children }: Props) {
  const { activeColor, setActiveColor } = useColorStore();
  // Checking if this button is currently active
  const active = activeColor === color;

  return (
    <button
      onClick={() => setActiveColor(color)}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold transition duration-300",
        {
          "bg-blue-500 text-white hover:bg-blue-600":
            active && color === "blue",
          "bg-red-500 text-white hover:bg-red-600":
            active && color === "red",
          "bg-gray-300 text-gray-700 hover:bg-gray-400":
            !active,
        }
      )}
    >
      {children}
    </button>
    
  );
}

export default ColorButton;