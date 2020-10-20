import React from 'react';
import { Container } from '@material-ui/core';
import useTweets from './hooks/useTweets';
import Box from '@material-ui/core/Box';
import { TweetCardSkeleton, TweetList } from './components';
import isEmpty from 'lodash/isEmpty';

export const Home = () => {
  const { tweets } = useTweets();

  return (
    <Container maxWidth="md">
      <Box my={5}>
        {isEmpty(tweets) ? (
          <TweetCardSkeleton />
        ) : (
          <TweetList tweets={tweets} />
        )}
      </Box>
    </Container>
  );
};
