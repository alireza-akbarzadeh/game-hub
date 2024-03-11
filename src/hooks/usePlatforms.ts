import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";
import { QueryKey } from "./QueryKey";
const apiClient = new APICLient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: [QueryKey.PLATFORM],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: platforms,
  });
};

export default usePlatforms;
