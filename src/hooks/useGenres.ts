import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient from "../services/api-client";
import { Genre } from "../services/genreServices";

const apiClient = new APICLient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, ///24 Hour
    initialData: genres,
  });
};

export default useGenres;
