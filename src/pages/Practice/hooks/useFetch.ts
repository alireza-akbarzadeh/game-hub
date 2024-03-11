import { useEffect, useMemo, useState } from "react";
import { fetchApi } from "../Custome-Hook";
// Define the FetchData function type
type FetchData<T> = {
  queryFn: (endpoint?: string, options?: any) => Promise<T>;
};

type FetchError = {
  message: string;
  code?: number;
  // Add any additional error properties you need
};

type UseFetchReturnType<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: FetchError | null;
};

type StateType = "loading" | "error" | "success";

export const useFetch = <T>(props: FetchData<T>): UseFetchReturnType<T> => {
  const { queryFn } = props;
  const [data, setData] = useState<T | undefined>();
  const [state, setState] = useState<StateType>("loading");
  const [error, setError] = useState<FetchError | null>(null);

  const isLoading = state === "loading";
  const isError = state === "error";
  const isSuccess = state === "success";

  const handleFetchData = async () => {
    try {
      const response = await queryFn();
      setData(response);
      setState("success");
    } catch (error) {
      setError(error as FetchError);
      setState("error");
    }
  };
  // Memoize the queryFn
  //   const memoizedQueryFn = useMemo(() => queryFn, [queryFn]);
  useEffect(() => {
    handleFetchData();
  }, []); // Include state in the dependency array

  return { data, isLoading, isError, isSuccess, error };
};

export function Test<T>(props: FetchData<T>): UseFetchReturnType<T> {
  const { queryFn } = props;
  const [data, setData] = useState<T | undefined>();
  const [state, setState] = useState<StateType>("loading");
  const [error, setError] = useState<FetchError | null>(null);

  const isLoading = state === "loading";
  const isError = state === "error";
  const isSuccess = state === "success";

  const handleFetchData = async () => {
    try {
      const response = await queryFn();
      setData(response);
      setState("success");
    } catch (error) {
      setError(error as FetchError);
      setState("error");
    }
  };
  // Memoize the queryFn
  //   const memoizedQueryFn = useMemo(() => queryFn, [queryFn]);
  useEffect(() => {
    handleFetchData();
  }, []); // Include state in the dependency array

  return { data, error, isError, isLoading, isSuccess };
}
