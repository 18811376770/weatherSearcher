import axios from 'axios';
const API_KEY='3ef6d5e821bcc8ee5a40058a53afc238';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
 export const FETCH_WEATHER='FETCH_WEATHER';
export function  fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},us`;
  //return redux promise as payload
  //ajax request
  const request = axios.get(url);
  return {
    type:FETCH_WEATHER,
    payload:request
  }
}
