import { api } from './index';

export default class TweetsService {
  static checkLastTweetId = (lastTweetId) =>
    lastTweetId ? `?afterId=${lastTweetId}&count=3` : ``;

  static getTweetsAPI = async (_, lastTweetId) => {
    const { data } = await api.get(`/api${this.checkLastTweetId(lastTweetId)}`);
    return data;
  };

  static getPreTweetsAPI = async (_, bottomTweetId) => {
    const { data } = await api.get(`/api?beforeId=${bottomTweetId}&count=3`);
    return data;
  };
}
