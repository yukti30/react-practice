// import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
// import genres from "@/data/genres";
// import useGenres from "@/hooks/useGenres";
// import usePlatforms from "@/hooks/usePlatforms";
import usePlatform from "@/hooks/usePltform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

//Games
//Genre Games
//Platform Games
//PLtaform Games
const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
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
