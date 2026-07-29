import { useComments } from "../../apis/commentList";

function TableComment() {
  const { data: comments, isLoading, isError, error } = useComments();

  if (isLoading) {
    return <p className="text-center py-6">Loading comment...</p>;
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
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left w-16">ID</th>
            <th className="px-4 py-3 text-left w-1/6">Name</th>
            <th className="px-4 py-3 text-left w-1/6">Email</th>
            <th className="px-4 py-3 text-left">Body</th>
          </tr>
        </thead>

        <tbody>
          {comments?.map((comment) => (
            <tr
              key={comment.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{comment.id}</td>
              <td className="px-4 py-3">{comment.name}</td>
              <td className="px-4 py-3 truncate">{comment.email}</td>
              <td className="px-4 py-3">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComment;