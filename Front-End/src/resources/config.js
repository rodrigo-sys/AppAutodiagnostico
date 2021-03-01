const HOST = 'localhost';
const PORT = 8080;

const config = {
    HOST: HOST,
    PORT: PORT,
    JWT_URL: 'http://' + HOST + ':' + PORT + '/api/auth/',
    API_URL: 'http://' + HOST + ':' + PORT + '/api/',
}
export default config;