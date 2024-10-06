import { FutureWeather } from "../../types/weather";

type Props = {
  weatherList: FutureWeather[];
};
const Forecast = ({ weatherList }: Props) => {
  return (
    <div className="xl:grid-cols-4justify-between mb-6 grid flex-1 grid-cols-2 gap-6">
      {weatherList.map((weather) => {
        return (
          <div
            key={weather.date}
            className="flex min-w-32 max-w-36 flex-col items-center px-4"
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
