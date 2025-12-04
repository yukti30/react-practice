import ExpandableText from "@/components/ExpandableText";
import GameDetailAttributes from "@/components/GameDetailAttributes";
import { GameVideo } from "@/components/GameVideo";
import useBackend from "@/hooks/useBackend";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useBackend(slug!);
  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameDetailAttributes game={game}></GameDetailAttributes>
      <GameVideo id={game.id}></GameVideo>
    </>
  );
};

export default GameDetailPage;
