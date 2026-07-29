import { useUsers } from "../../apis/userList";

function TableUser() {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <p className="text-center py-6">Loading users...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-6 text-red-500">
        {(error as Error).message}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full text-sm table-fixed">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left w-12">ID</th>
            <th className="px-4 py-3 text-left w-1/6">Name</th>
            <th className="px-4 py-3 text-left w-24">Username</th>
            <th className="px-4 py-3 text-left w-1/5">Email</th>
            <th className="px-4 py-3 text-left w-24">City</th>
            <th className="px-4 py-3 text-left">Company</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{user.id}</td>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3 truncate">{user.username}</td>
              <td className="px-4 py-3 truncate">{user.email}</td>
              <td className="px-4 py-3">{user.address.city}</td>
              <td className="px-4 py-3">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUser;