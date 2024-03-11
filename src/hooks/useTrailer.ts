import { useQuery } from "@tanstack/react-query";
import React from "react";
import APICLient from "../services/api-client";
import { Triller } from "../entities/Triller";
import { QueryKey } from "./QueryKey";

const useTrailer = (gameId: number) => {
  const apiClient = new APICLient<Triller>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: [QueryKey.SCREEN_SHOTS, gameId],
    queryFn: apiClient.getAll,
  });
};
export default useTrailer;
