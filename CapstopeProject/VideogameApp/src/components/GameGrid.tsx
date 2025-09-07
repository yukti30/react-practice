import useGame from "@/hooks/useGame";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { errors, games } = useGame();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
