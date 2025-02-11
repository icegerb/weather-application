import { useCallback, useEffect, useState } from "react";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import { fetchWeather } from "../../services/weatherApis";
import { CurrentWeather, FutureWeather } from "../../types/weather";
import { cities } from "../../constants/cities";

const WeatherCard = () => {
  const [city, setCity] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>();
  const [futureWeatherList, setFutureWeatherList] = useState<FutureWeather[]>(
    [],
  );
  const [citiesWeather, setCitiesWeather] = useState<CurrentWeather[]>([]);

  const handleWeatherSearch = useCallback(async (city: string) => {
    try {
      const response = await fetchWeather(city);
      console.log(response);
      if (response) {
        const { currentWeather, futureWeatherList } = response;
        setCurrentWeather(currentWeather);
        setFutureWeatherList(futureWeatherList);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }, []);

  const fetchCitiesWeather = useCallback(async () => {
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const response = await fetchWeather(city.city);
        return response?.currentWeather;
      }),
    );
    setCitiesWeather(weatherData);
  }, []);

  useEffect(() => {
    fetchCitiesWeather();
  }, [fetchCitiesWeather]);

  useEffect(() => {
    handleWeatherSearch(city);
  }, [city, handleWeatherSearch]);

  return (
    <div className="lg:max-w-10/12 m-8 flex h-fit flex-wrap justify-center gap-9 rounded-[52px] bg-slate-100 p-6 md:flex-nowrap">
      <div className="w-full sm:w-96">
        {currentWeather && <WeatherDetails weather={currentWeather} />}
      </div>
      <div className="flex flex-col">
        {futureWeatherList && <Forecast weatherList={futureWeatherList} />}
        <SearchBar setCity={setCity} />
        {citiesWeather && (
          <CityWeather
            setCity={setCity}
            citiesWeather={citiesWeather}
            cities={cities}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
