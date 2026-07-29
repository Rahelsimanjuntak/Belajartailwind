import { useQuery } from "@tanstack/react-query";
import type { Comment } from "../../types/typeComments";

// Function untuk mengambil data dari API dan menunggu sampai semua data terambil
const fetchComments = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  // kalau request gagal
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  // Ubah response menjadi JSON
  return response.json();
};

// React Component
function CommentList() {
  // Mengambil data menggunakan TanStack Query
  const {
  data: Comment,
  isLoading,
  isError,
  error,
} = useQuery<Comment[]>({
  queryKey: ["comments"],
  queryFn: fetchComments,
});

  // Tampilan ketika loading
  if (isLoading) {
    return <p className="text-center py-6">Loading comment...</p>;
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
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Body</th>
          </tr>
        </thead>

        <tbody>
          {Comment?.map((comment) => (
            <tr
              key={comment.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{comment.id}</td>
              <td className="px-4 py-3">{comment.name}</td>
              <td className="px-4 py-3">{comment.email}</td>
              <td className="px-4 py-3">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommentList;