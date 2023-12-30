import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleteon = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleteon;
