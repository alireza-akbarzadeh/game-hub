import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APICLient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, ///24 Hour
    initialData: platforms,
  });
};

export default usePlatforms;
