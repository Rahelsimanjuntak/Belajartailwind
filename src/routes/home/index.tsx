import { useState } from "react";
import ColorButton from "../../components/button";
import ColorBox from "../../components/colorBox";
import TableUser from "../../components/home/tableUser";
import TableComment from "../../components/home/tableComment";
import FilterName from "../../components/filter";
import { useColorStore } from "../stores/colorStore";

function Home() {
  const { activeColor: zustandColor } = useColorStore();
  const [localColor, setLocalColor] = useState<"blue" | "red" | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Container User */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-2">
              {/* Zustand */}
              <div className="flex items-center gap-3">
                <ColorButton color="blue" mode="zustand">Blue</ColorButton>
                <ColorBox activeColor={zustandColor} />
              </div>
              {/* useState */}
              <div className="flex items-center gap-3">
                <ColorButton
                  color="blue"
                  mode="usestate"
                  localColor={localColor}
                  onLocalChange={(c) => setLocalColor((prev) => prev === c ? null : c)}
                >
                  Blue
                </ColorButton>
                <ColorBox activeColor={localColor} />
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">User</h2>
            <FilterName type="user" />
          </div>
          <TableUser />
        </div>

        {/* Container Comment */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-2">
              {/* Zustand */}
              <div className="flex items-center gap-3">
                <ColorButton color="red" mode="zustand">Red</ColorButton>
                <ColorBox activeColor={zustandColor} />
              </div>
              {/* useState */}
              <div className="flex items-center gap-3">
                <ColorButton
                  color="red"
                  mode="usestate"
                  localColor={localColor}
                  onLocalChange={(c) => setLocalColor((prev) => prev === c ? null : c)}
                >
                  Red
                </ColorButton>
                <ColorBox activeColor={localColor} />
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Comment</h2>
            <FilterName type="comment" />
          </div>
          <TableComment />
        </div>

      </div>
    </div>
  );
}

export default Home;