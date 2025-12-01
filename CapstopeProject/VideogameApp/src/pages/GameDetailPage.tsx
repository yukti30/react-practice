import ExpandableText from "@/components/ExpandableText";
import useBackend from "@/hooks/useBackend";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
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
    </>
  );
};

export default GameDetailPage;
