const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKEY = `&appid=${import.meta.env.VITE_API_KEY}`;
const iconURL = 'https://openweathermap.org/img/w/';

const getCurrentWeather = async (coordinates) => {
  const { lat, lon } = coordinates;
  const response = await fetch(`${URL}lat=${lat}&lon=${lon}${APIKEY}&units=metric`);
  const data = await response.json();
  return { ...data, weather: { ...data.weather[0], icon: `${iconURL + data.weather[0].icon}.png` } };
};

export default getCurrentWeather;
