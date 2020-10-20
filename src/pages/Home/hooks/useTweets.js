import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { addTweets } from '../../../redux/tweets';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweets } from '../../../selectors/tweetsSelectors';
import TweetsService from '../../../services/tweetsService';
import isEmpty from 'lodash/isEmpty';

export default function useTweets() {
  const INTERVAL_MS = 2000;
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const [lastTweetId, setLastTweetId] = useState(0);

  const { data } = useQuery(
    ['tweets', lastTweetId],
    TweetsService.getTweetsAPI,
    {
      retry: true
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      !isEmpty(tweets[0]) && setLastTweetId(tweets[0].id);
    }, INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [tweets]);

  useEffect(() => {
    !isEmpty(data) && dispatch(addTweets(data));
  }, [data, dispatch]);

  return { tweets };
}
