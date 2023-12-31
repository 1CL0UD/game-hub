import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'.5rem'}>
          <HStack>
            <Image
              boxSize={'2rem'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
