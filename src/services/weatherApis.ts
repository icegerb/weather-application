import { ForecastDay } from "./../types/weather";
import { format, getHours } from "date-fns";
import {
  CurrentWeather,
  FutureWeather,
  WeatherApiResponse,
} from "../types/weather";
import { weatherBgMap, weatherIconMap } from "../constants/weatherMaps";
import { getCurrentLocation } from "../utils/getCurrentLocation";
// import { getWeatherApiKey } from "../secrets";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city: string): Promise<{
  currentWeather: CurrentWeather;
  futureWeatherList: FutureWeather[];
}> {
  // Get api key from AWS secret manager
  // let API_KEY;
  // try {
  //   API_KEY = await getWeatherApiKey();
  // } catch (error) {
  //   console.error("Error fetching API key:", error);
  // }

  const { lat, lon } = await getCurrentLocation();
  let API_URL: string;
  if (city) {
    API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=yes`;
  } else {
    API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=yes&alerts=yes`;
  }
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WeatherApiResponse =
      (await response.json()) as WeatherApiResponse;

    if (
      !data.forecast ||
      !data.forecast.forecastday ||
      data.forecast.forecastday.length === 0
    ) {
      throw new Error("Invalid data structure from API");
    }

    const current = data.forecast.forecastday[0];
    const conditionText = current.day.condition.text.trim();

    const currentWeather: CurrentWeather = {
      date: format(new Date(), "dd MMMM, EEEE HH:mm"),
      city: data.location.name,
      currentTemperature: `${current.hour[getHours(new Date())].temp_c}°`,
      temperature: `${current.day.mintemp_c} ~ ${current.day.maxtemp_c}°`,
      conditionText: conditionText,
      png: weatherIconMap[conditionText] || data.current.condition.icon,
      bgPng: weatherBgMap[conditionText],
      vars: {
        avgHumidity: `${current.day.avghumidity}%`,
        windSpeed: `${current.day.maxwind_kph}km/h`,
        avgTemperature: `${current.day.avgtemp_c}°`,
        pm2_5: `${data.current.air_quality.pm2_5}μg/m³`,
      },
    };

    const futureWeatherList: FutureWeather[] = data.forecast.forecastday
      .slice(1)
      .map((i: ForecastDay) => ({
        conditionText: i.day.condition.text.trim(),
        png:
          weatherIconMap[i.day.condition.text.trim()] || i.day.condition.icon,
        week: format(new Date(i.hour[12].time), "EEEE"),
        date: format(new Date(i.hour[12].time), "dd MMMM"),
        temperature: `${i.day.mintemp_c} ~ ${i.day.maxtemp_c}°`,
      }));

    return { currentWeather, futureWeatherList };
  } catch (error) {
    console.error("Fetching weather error:", error);
    throw error;
  }
}
