import axios from 'axios';
import config from '@/resources/config.js';
import header from '@/resources/auth.header.js';

class AuthService {
  login(user) {
    const headers = {
      'Content-Type': 'application/json',
    }
    return axios
      .post(config.JWT_URL + 'login', {
        username: user.email,
        password: user.password
      },{headers: headers})
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
    const params = new URLSearchParams();
    params.append("username", user.username);
    params.append("email", user.email);
    params.append("password", user.password);
    return axios
      .post(config.JWT_URL + 'register', params, {headers: header()})
      .then(response => {
        //this.$router.push("/login");
        console.log(response)
        return response.data;
      });
  }
}

export default new AuthService(); 
