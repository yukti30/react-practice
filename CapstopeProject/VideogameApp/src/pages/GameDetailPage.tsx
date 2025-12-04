import ExpandableText from "@/components/ExpandableText";
import GameDetailAttributes from "@/components/GameDetailAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import { GameVideo } from "@/components/GameVideo";
import useBackend from "@/hooks/useBackend";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useBackend(slug!);
  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameDetailAttributes game={game}></GameDetailAttributes>
        </GridItem>
        <GridItem>
          <GameVideo id={game.id}></GameVideo>
          <GameScreenshots id={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
