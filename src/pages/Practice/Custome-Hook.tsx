import { useMutation, useQuery } from "@tanstack/react-query";
import { Test, useFetch } from "./hooks/useFetch";

type FetchApi<T> = (endpoint: string, options?: any) => Promise<T>;
export const fetchApi: FetchApi<any> = async (
  endpoint: string,
  options?: any
) => {
  const response = await fetch(endpoint, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  const data = await response.json();
  return data;
};
type User = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};
export const CustomHook = () => {
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryFn: () => fetchApi("https://jsonplaceholder.typicode.com/todos/1"),
  });

  return <div>{data?.title}</div>;
};
