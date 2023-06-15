const URL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const limit = '&limit=10';
const APIKEY = `&appid=${import.meta.env.VITE_API_KEY}`;

const getCities = async (cityName) => {
  const response = await fetch(URL + cityName + limit + APIKEY);
  const data = await response.json();
  return data;
};

export default getCities;
