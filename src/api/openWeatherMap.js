import axios from 'axios';

const apiKey = '893c23322ceed38784d041b0a0622043';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
module.exports = {
    getTemp(location) {
        let endcodedLocation = encodeURI(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${endcodedLocation}`;
        return axios.get(requestUrl).then((res)=> {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message);
        });
    }
};
