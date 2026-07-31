import clsx from "clsx";


interface Props {
  activeColor: "blue" | "red" | null;
}

function ColorBox({ activeColor }: Props) {
  const active = activeColor !== null;

  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      {/* Shadow + animate ping */}
      {active && (
        <div
          className={clsx(
            "absolute inset-0 rounded-md animate-ping opacity-60",
            {
              "bg-blue-400": activeColor === "blue",
              "bg-red-400": activeColor === "red",
            }
          )}
        />
      )}

      {/* Box */}
      <div
        className={clsx(
          "relative w-6 h-6 rounded-md border transition-all duration-300",
          {
            "bg-blue-500 border-blue-600 shadow-lg shadow-blue-500/60": activeColor === "blue",
            "bg-red-500 border-red-600 shadow-lg shadow-red-500/60": activeColor === "red",
            "bg-gray-200 border-gray-300": activeColor === null,
          }
        )}
      />
    </div>
  );
}

export default ColorBox;