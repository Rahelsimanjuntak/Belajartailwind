import ColorButton from "../../components/button";
import CommentList from "../comment";
import UserList from "../user";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Container User */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Button Group */}
          <div className="flex gap-3 mb-6">
            <ColorButton color="blue">
              User
            </ColorButton>

            <ColorButton color="blue">
              All User
            </ColorButton>
          </div>

          <UserList />
        </div>

        {/* Container Comment */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Button Group */}
          <div className="flex gap-3 mb-6">
            <ColorButton color="red">
              Comment
            </ColorButton>

            <ColorButton color="red">
              All Comment
            </ColorButton>
          </div>

          <CommentList />
        </div>

      </div>
    </div>
  );
}

export default Home;