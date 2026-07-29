import { useComments } from "../../apis/commentList";

function TableComment() {
  const { data: comments, isLoading, isError, error } = useComments();

  if (isLoading) {
    return <p className="py-6 text-center">Loading comment...</p>;
  }

  if (isError) {
    return (
      <p className="py-6 text-center text-red-500">
        {(error as Error).message}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-[900px] w-full table-fixed text-sm">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="w-16 px-2 py-3 text-left">
              ID
            </th>

            <th className="w-60 px-2 py-3 text-left">
              Name
            </th>

            <th className="w-60 px-2 py-3 text-left">
              Email
            </th>

            <th className="px-2 py-3 text-left">
              Body
            </th>
          </tr>
        </thead>

        <tbody>
          {comments?.map((comment) => (
            <tr
              key={comment.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-2 py-3">
                {comment.id}
              </td>

              <td className="px-2 py-3 break-words">
                {comment.name}
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                {comment.email}
              </td>

              <td className="px-2 py-3 break-words">
                {comment.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComment;