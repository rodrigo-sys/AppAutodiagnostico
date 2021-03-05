import axios from 'axios';
import config from '@/resources/config.js';
import header from '@/resources/auth.header.js';

class AuthService {
  login(user) {
    return axios
      .post(config.JWT_URL + 'login', {
        username: user.email,
        password: user.password
      }, { headers: header() })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    var params = {
      username: user.username,
      email: user.email,
      password: user.password
    }
    return axios
      .post(config.JWT_URL + 'register', params, { headers: header() })
      .then(response => {
        //this.$router.push("/login");
        console.log(response);
        return response.data;
      });
  }
}

export default new AuthService();
