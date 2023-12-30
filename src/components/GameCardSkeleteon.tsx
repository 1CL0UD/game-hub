import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleteon = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Skeleton height={'14rem'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleteon;
