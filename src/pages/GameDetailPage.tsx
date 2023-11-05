import {
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
