import axios from 'axios';
import authHeader from './auth-header';
import config from '@/resources/config.js';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }
}

export default new UserService();