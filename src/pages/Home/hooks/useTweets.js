import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { addTweets, addPrevTweets } from '../../../redux/tweets';
import { useDispatch, useSelector } from 'react-redux';
import usePageBottom from './usePageBottom';
import { selectTweets } from '../../../selectors/tweetsSelectors';
import TweetsService from '../../../services/tweetsService';
import isEmpty from 'lodash/isEmpty';

export default function useTweets() {
  const INTERVAL_MS = 30000;
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const isPageBottom = usePageBottom();

  useEffect(() => {
    // if no data or user hasn't scroll to the bottom, don't get more data
    // if (!isPageBottom || !data) {
    if (!isPageBottom) {
      console.log('bottom');
    }
  }, [isPageBottom]);

  const [lastTweetId, setLastTweetId] = useState(0);
  const [prevTweetId, setPrevTweetId] = useState(0);

  const { data } = useQuery(
    ['tweets', lastTweetId],
    TweetsService.getTweetsAPI,
    {
      retry: true
    }
  );

  const { data: prevData } = useQuery(
    ['tweets', prevTweetId],
    TweetsService.getPreTweetsAPI,
    {
      retry: true,
      enabled: isPageBottom
    }
  );

  useEffect(() => {
    !isEmpty(tweets) && setPrevTweetId(tweets[tweets.length - 1].id);
    const timer = setTimeout(() => {
      !isEmpty(tweets[0]) && setLastTweetId(tweets[0].id);
    }, INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [tweets]);

  useEffect(() => {
    !isEmpty(data) && dispatch(addTweets(data));
  }, [data, dispatch]);

  useEffect(() => {
    !isEmpty(prevData) && dispatch(addPrevTweets(prevData));
  }, [prevData, dispatch]);

  return { tweets };
}
