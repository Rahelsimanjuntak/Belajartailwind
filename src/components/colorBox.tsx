import { useColorStore } from "../routes/stores/colorStore";

interface Props {
  color: "blue" | "red";
}

export default function ColorBox({ color }: Props) {
  const { activeColor } = useColorStore();
  const active = activeColor === color;

  return (
    <div
      className={`w-6 h-6 rounded-md border transition
        ${
          active
            ? color === "blue"
              ? "bg-blue-500 border-blue-600"
              : "bg-red-500 border-red-600"
            : "bg-gray-200 border-gray-300"
        }`}
    />
  );
}