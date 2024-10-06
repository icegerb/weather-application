import { FutureWeather } from "../../types/weather";

type Props = {
  weatherList: FutureWeather[];
};
const Forecast = ({ weatherList }: Props) => {
  return (
    <div className="mb-6 flex flex-1 flex-wrap justify-between gap-6">
      {weatherList.map((weather) => {
        return (
          <div
            key={weather.date}
            className="flex w-36 flex-col items-center px-4"
          >
            <h4 className="text-lg font-bold">{weather.week}</h4>
            <p className="text-sm">{weather.date}</p>
            <img
              src={weather.png}
              alt={weather.conditionText}
              className="w-28"
            />
            <p>{weather.temperature}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
