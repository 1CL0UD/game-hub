import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 80 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge
      colorScheme={color}
      fontSize={'1rem'}
      paddingX={'0.5rem'}
      borderRadius={'0.25rem'}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
