import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
// import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, errors } = useGenres();
  if (errors) return null;

  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
