import getCurrentWeather from '../../services/weatherApi/currentWeatherData';
import getCities from '../../services/weatherApi/geocodingAPI';
import debounce from '../debounce';

export const handleSearch = debounce(async (inputData, setSuggestions) => {
  const cities = await getCities(inputData.searchString);
  setSuggestions(cities);
}, 500);

export const handleChangeInput = (event, inputData, setInputData) => {
  const { name, value } = event.target;
  setInputData({ ...inputData, [name]: value });
};

export const handleSelectSuggestion = async (suggestion, setSuggestions, setInputData, setWeatherData) => {
  const { lat, lon } = suggestion;
  setInputData((prev) => ({ ...prev, searchString: suggestion.name }));
  setSuggestions([]);
  const weather = await getCurrentWeather({ lat, lon });
  setWeatherData(() => ({ ...weather }));
};
