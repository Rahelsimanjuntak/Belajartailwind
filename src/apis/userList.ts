import { queryOptions, useQuery } from "@tanstack/react-query";
import type { User } from "../types/typeUser";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: fetchUsers,
});

export function useUsers() {
  return useQuery(usersQueryOptions);
}