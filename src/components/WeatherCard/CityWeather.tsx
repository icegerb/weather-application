import { CurrentWeather } from "../../types/weather";
import { City } from "../../types/city";

type Props = {
  setCity: (city: string) => void;
  citiesWeather: CurrentWeather[];
  cities: City[];
};

const CityWeather = ({ setCity, citiesWeather, cities }: Props) => {
  return (
    <div className="mt-6 grid grid-cols-2 justify-between gap-6 xl:grid-cols-4">
      {citiesWeather.map((weather) => {
        return (
          <button
            key={weather.city}
            className="relative flex min-w-32 max-w-36 rounded-2xl bg-cover bg-center py-2 text-white"
            style={{
              backgroundImage: `url(${cities.find((city) => city.city.toLowerCase().trim() === weather.city.toLowerCase().trim())?.background})`,
            }}
            onClick={() => setCity(weather.city)}
          >
            <div className="z-10 m-auto flex flex-col items-center">
              <img
                src={weather.png}
                alt={weather.conditionText}
                className="w-12"
              />
              <p data-cy="city">
                <strong>{weather.city}</strong>
              </p>
              <p>{weather.temperature}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/70"></div>
          </button>
        );
      })}
    </div>
  );
};

export default CityWeather;
