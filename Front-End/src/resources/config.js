const HOST = 'localhost';
const PORT = 8000;

const config = {
    HOST: HOST,
    PORT: PORT,
    JWT_URL: 'http://' + HOST + ':' + PORT + '/api/auth/',
    API_URL: 'http://' + HOST + ':' + PORT + '/api/',
}

var getJwtConfig = function() {
    const token = localStorage.getItem('token');
    return { headers: {Authorization: "Bearer " + token} };
}

module.exports = {
    config: config,
    getJwtConfig: getJwtConfig,
}
    