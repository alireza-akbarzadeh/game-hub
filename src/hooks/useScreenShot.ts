import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/ScreenSHot";
import APICLient from "../services/api-client";
import { QueryKey } from "./QueryKey";
const useScreenShot = (gameId: number) => {
  const apiClient = new APICLient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: [QueryKey.SCREEN_SHOTS, gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenShot;
