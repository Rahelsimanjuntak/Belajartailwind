import { queryOptions, useQuery } from "@tanstack/react-query";
import type { Comment, CreateCommentPayload } from "../types/typeComments";

const BASE = "https://jsonplaceholder.typicode.com";
const LOCAL_KEY = "setter_comments";

//get locally saved comments
const getLocalComments = (): Comment[] => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? "[]");
  } catch {
    return [];
  }
};

// Save a new comment to localStorage
const saveLocalComment = (comment: Comment) => {
  const existing = getLocalComments();
  localStorage.setItem(LOCAL_KEY, JSON.stringify([...existing, comment]));
};

const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch(`${BASE}/comments`);
  if (!res.ok) throw new Error("Gagal fetch comments");
  const apiData: Comment[] = await res.json();

  const apiComments = apiData.map((c) => ({
    ...c,
    source: "json_api" as const,
  }));
  const localComments = getLocalComments(); // get from localStorage

  return [...apiComments, ...localComments];
};

export const commentsQueryOptions = queryOptions({
  queryKey: ["comments"],
  queryFn: fetchComments,
});

export function useComments() {
  return useQuery(commentsQueryOptions);
}

export const postComment = async (
  payload: CreateCommentPayload,
): Promise<Comment> => {
  const res = await fetch(`${BASE}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Gagal buat comment");

  const data = await res.json();
  const newComment: Comment = {
    ...data,
    localId: crypto.randomUUID(), // unique key
    source: "setter" as const,
  };

  saveLocalComment(newComment); // ← simpan ke localStorage
  return newComment;
};
