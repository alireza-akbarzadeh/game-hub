import { useQuery } from "@tanstack/react-query";
import React from "react";
import APICLient from "../services/api-client";
import { Triller } from "../entities/Triller";

const useTrailer = (gameId: number) => {
  const apiClient = new APICLient<Triller>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useTrailer;
