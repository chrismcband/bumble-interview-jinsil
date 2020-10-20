import { api } from './index';

export default class TweetsService {
  static checkLastTweetId = (lastTweetId) =>
    lastTweetId ? `?afterId=${lastTweetId}` : ``;

  static getTweetsAPI = async (_, lastTweetId) => {
    const { data } = await api.get(`/api${this.checkLastTweetId(lastTweetId)}`);
    return data;
  };
}
