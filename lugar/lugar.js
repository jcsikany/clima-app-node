
//require
const axios = require('axios');

//Es un buen ejemplo para entender el async-await, hacemos una funcion asincrona porq necesitamos q espere (await)
//A q resuelta la api de google para dsp seguir y obtener los datos q queremos en las variables.
const getLugarLatLng = async(direccion) => {
    
    let encondedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encondedUrl }&key=AIzaSyB8yoCBPH_ihEcgDVbEG7ACij4TfM21Fds`)
       
        if (resp.data.status === 'ZERO_RESULTS' ){

            throw new Error(`No hay resultados para la ciudad ${ direccion }`);
        }    
      
            let location = resp.data.results[0];
            let coors = location.geometry.location;

            return {
                direccion: location.formatted_address,
                lag: coors.lat,
                lng: coors.lng
            }
}

module.exports = {
    getLugarLatLng
}





