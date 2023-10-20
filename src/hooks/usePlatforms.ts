import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";
import ms from "ms";
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
    staleTime: ms("24"),
    initialData: platforms,
  });
};

export default usePlatforms;
