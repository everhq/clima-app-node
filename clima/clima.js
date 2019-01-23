const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c0d4a2a52b2522468775e53fe183c9bb`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}