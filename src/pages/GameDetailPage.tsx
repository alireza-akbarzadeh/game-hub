import { Grid, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import { GameAttributes } from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";
import { GameScreenShots } from "../components/GameScreenShots";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) <Spinner />;
  if (error) throw error;
  if (!game) return null;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};
