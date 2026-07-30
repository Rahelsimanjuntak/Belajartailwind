import { useQuery } from "@tanstack/react-query";
import type { Comment } from "../types/typeComments";

const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
};

export function useComments() {
  return useQuery<Comment[]>({
    queryKey: ["comments"], //
    queryFn: fetchComments,
  });
}

