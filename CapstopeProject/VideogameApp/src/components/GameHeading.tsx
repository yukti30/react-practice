import type { GameQuery } from "@/App";
// import genres from "@/data/genres";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

//Games
//Genre Games
//Platform Games
//PLtaform Games
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
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
