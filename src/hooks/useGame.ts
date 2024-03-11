import { useQuery } from "@tanstack/react-query";
import gameServices from "../services/gameServices";
import { QueryKey } from "./QueryKey";

const useGame = (slug: string) =>
  useQuery({
    queryKey: [QueryKey.GAMES, slug],
    queryFn: () => gameServices.get(slug),
  });
export default useGame;
