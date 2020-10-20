import axios from 'axios';

//set env variable later as process.env.REACT_APP_API_URL
const baseUrl = 'https://bumble-twitter-interview.herokuapp.com/jinsil-hwang';

const api = axios.create({ baseURL: baseUrl });

export { api };
