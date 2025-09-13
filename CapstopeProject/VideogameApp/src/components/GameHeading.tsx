import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

//Games
//Genre Games
//Platform Games
//PLtaform Games
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  // my inplementation
  // gameQuery.genre?.name && gameQuery.platform?.name
  //   ? gameQuery.platform.name + " " + gameQuery.genre.name + " Games"
  //   : gameQuery.genre?.name
  //   ? gameQuery.genre.name + " Games"
  //   : gameQuery.platform?.name
  //   ? gameQuery.platform.name + " Games"
  //   : "Games";
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
