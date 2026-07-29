import ColorButton from "../../components/button";
import ColorBox from "../../components/colorBox";
import TableUser from "../../components/home/tableUser";
import TableComment from "../../components/home/tableComment";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Container User */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Button Group */}
          <div className="flex items-center gap-3 mb-6">
            <ColorButton color="blue">
              User
            </ColorButton>

            <ColorBox color="blue" />
          </div>

          <TableUser />
        </div>

        {/* Container Comment */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Button Group */}
          <div className="flex items-center gap-3 mb-6">
            <ColorButton color="red">
              Comment
            </ColorButton>

            <ColorBox color="red" />
          </div>

          <TableComment />
        </div>

      </div>
    </div>
  );
}

export default Home;