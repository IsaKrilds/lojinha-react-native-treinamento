import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://trainning-storeapp-gateway-dev-g5kv7eofma-uw.a.run.app',
});

export default instance;
