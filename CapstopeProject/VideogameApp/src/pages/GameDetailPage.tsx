import useBackend from "@/hooks/useBackend";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useBackend(slug!);
  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
