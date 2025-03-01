import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APICLient from "../services/api-client";
import { Genre } from "../entities/Genre";
import { QueryKey } from "./QueryKey";
const apiClient = new APICLient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: [QueryKey.GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: genres,
  });
};

export default useGenres;
