import { useQuery } from "@tanstack/react-query";
import type { User } from "../../types/typeUser";

// Function untuk mengambil data dari API dan menunggu sampai semua data terambil
const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  // kalau request gagal
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  // Ubah response menjadi JSON
  return response.json();
};
// React Component
function UserList() {
  // Mengambil data menggunakan TanStack Query
  const {
  data: users,
  isLoading,
  isError,
  error,
} = useQuery<User[]>({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
  // Tampilan ketika loading
  if (isLoading) {
    return <p className="text-center py-6">Loading users...</p>;
  }
  // Tampilan ketika error
  if (isError) {
    return (
      <p className="text-center py-6 text-red-500">
        {(error as Error).message}
      </p>
    );
  }
  // Tampilan ketika data berhasil didapat

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Username</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">City</th>
            <th className="px-4 py-3 text-left">Company</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user)  => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-3">{user.id}</td>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.username}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.address.city}</td>
              <td className="px-4 py-3">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;