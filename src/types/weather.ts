export type ForecastDay = {
  day: {
    condition: {
      icon: string;
      text: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
    avghumidity: number;
    maxwind_kph: number;
    avgtemp_c: number;
    avgvis_km: number;
  };
  hour: {
    [key: number]: {
      temp_c: number;
      time: string;
    };
  };
};

export type WeatherApiResponse = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    humidity: number;
    air_quality: {
      pm2_5: number;
    };
  };
  forecast: {
    forecastday: ForecastDay[];
  };
};

export type CurrentWeather = {
  date: string;
  city: string;
  currentTemperature: string;
  temperature: string;
  conditionText: string;
  png: string;
  bgPng: string;
  vars: {
    windSpeed: string;
    avgTemperature: string;
    avgHumidity: string;
    pm2_5: string;
  };
};

export type FutureWeather = {
  conditionText: string;
  png: string;
  week: string;
  date: string;
  temperature: string;
};
