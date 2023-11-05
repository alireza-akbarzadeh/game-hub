import React from "react";
import useScreenShot from "../hooks/useScreenShot";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

export const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading } = useScreenShot(gameId);
  if (isLoading) return null;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results?.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
