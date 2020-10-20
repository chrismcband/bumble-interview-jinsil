import React from 'react';
import { TweetCard } from '..';
import PropTypes from 'prop-types';

const TweetList = ({ tweets }) => {
  return tweets.map((tweet) => <TweetCard {...tweet} key={tweet.id} />);
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      username: PropTypes.string,
      id: PropTypes.number
    })
  )
};

export default React.memo(TweetList);
