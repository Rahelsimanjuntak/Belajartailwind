import ColorButton from "../../components/button";
import ColorBox from "../../components/colorBox";
import TableUser from "../../components/home/tableUser";
import TableComment from "../../components/home/tableComment";
import FilterName from "../../components/filter";

function Home() {
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Container User */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            {/* Button Group */}
            <div className="flex items-center gap-3 mb-4">
              <ColorButton color="blue">blue</ColorButton>

              <ColorBox />
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              User
            </h2>
            <FilterName type="user" />
          </div>

          <TableUser />
        </div>

        {/* Container Comment */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            {/* Button Group */}
            <div className="flex items-center gap-3 mb-4">
              <ColorButton color="red">red</ColorButton>

              <ColorBox />
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Comment
            </h2>
            <FilterName type="comment" />
          </div>
          <TableComment />
        </div>
      </div>
    </div>
  );
}

export default Home;
