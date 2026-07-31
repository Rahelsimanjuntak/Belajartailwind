import { queryOptions } from "@tanstack/react-query";
import type { Comment, CreateCommentPayload } from "../types/typeComments";


const BASE = "https://jsonplaceholder.typicode.com";

const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch(`${BASE}/comments`);
  if (!res) alert("Gagal fetch comments");
 
  return res.json();
};

export const commentsQueryOptions = queryOptions({
  queryKey: ["comments"],
  queryFn: fetchComments,
});


export const postComment = async ( payload: CreateCommentPayload,
) => {
  const res = await fetch(`${BASE}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Gagal buat comment");
  return res.json();
};
