const axios = require('axios');

const getClima = async(lat, lng) => {
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f80a61e4b0eb93045347c4f3f8cb7420`) 
 

    return resp.data.main.temp;  

}

module.exports = {
    getClima
}