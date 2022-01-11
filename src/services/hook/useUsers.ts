import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";
interface UsersType {
  name: string;
  createdAt: string;
  email: string;
  id?: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: UsersType[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  // async () => {
  const { data, headers } = await api.get(`/api/users`, {
    params: {
      page,
    },
  });
  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: UsersType) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(["users", { page }], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //five seconds
  });
}

// export function useUsers(
//   page: number,
//   options?: UseQueryOptions<GetUsersResponse, UsersType, any, any>
// ) {
//   return useQuery(["users", page], () => getUsers(page), {
//     staleTime: 1000 * 60 * 1,
//     ...options,
//   });
//   //as UseQueryResult<GetUsersResponse, unknown>
// }
