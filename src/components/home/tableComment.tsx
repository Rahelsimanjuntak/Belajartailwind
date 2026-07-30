import { useComments } from "../../apis/commentList";
import { useFilterStore } from "../../../src/routes/stores/filterStore";
import clsx from "clsx";


function TableComment() {
  const { data: comments, isLoading, isError, error } = useComments();
  const { commentFilter } = useFilterStore();

  const filteredComments = comments?.filter((comment) =>
    comment.name.toLowerCase().includes(commentFilter.toLowerCase()),
  );

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
      <table className="min-w-225 w-full table-fixed text-sm">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="w-16 px-2 py-3 text-left">ID</th>
            <th className="w-60 px-2 py-3 text-left">Name</th>
            <th className="w-60 px-2 py-3 text-left">Email</th>
            <th className="px-2 py-3 text-left">Body</th>
          </tr>
        </thead>

        <tbody>
          {filteredComments?.map((comment) => (
            <tr
              key={comment.localId ?? comment.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-2 py-3">{comment.id}</td>
              <td className="px-2 py-3 break-word">{comment.name}</td>
              <td className="px-2 py-3 whitespace-nowrap">{comment.email}</td>
              <td className="px-2 py-3 break-word">{comment.body}</td>
              <td className="px-2 py-3">
                <span className={clsx(
                  "text-xs px-2 py-0.5 rounded-full font-medium",
                  comment.source === "setter"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-500"
                )}>
                  {comment.source === "setter" ? "Setter" : "API"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComment;
