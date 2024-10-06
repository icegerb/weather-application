import HumidityIcon from "../../assets/meta_icon/humidity.svg";
import WindSpeedIcon from "../../assets/meta_icon/wind_speed.svg";
import Pm25Icon from "../../assets//meta_icon/PM2.5.svg";
import AvgTemperatureIcon from "../../assets/meta_icon/Somatosensory_temperature.svg";
import { CurrentWeather } from "../../types/weather";

type Props = {
  weather: CurrentWeather;
};

const WeatherDetails = ({ weather }: Props) => {
  const weatherStats = [
    {
      icon: HumidityIcon,
      label: "humidity icon",
      value: weather.vars.avgHumidity,
    },
    {
      icon: WindSpeedIcon,
      label: "wind speed icon",
      value: weather.vars.windSpeed,
    },
    { icon: Pm25Icon, label: "PM 2.5 icon", value: weather.vars.pm2_5 },
    {
      icon: AvgTemperatureIcon,
      label: "Average temperature icon",
      value: weather.vars.avgTemperature,
    },
  ];

  return (
    <div
      className="mx-auto rounded-[36px] bg-blue-500 bg-cover bg-right-top p-6"
      style={{ backgroundImage: `url(${weather.bgPng})` }}
    >
      <p className="text-white">{weather.date}</p>
      <div className="flex flex-col items-center text-white">
        <h4 className="my-5 text-lg font-semibold">{weather.city}</h4>
        <h3 className="text-8xl font-semibold">{weather.currentTemperature}</h3>
        <p>{weather.temperature}</p>
        <img
          src={weather.png}
          alt={weather.conditionText}
          className="my-4 w-36"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-xl bg-white/80 px-2 py-4 text-sm md:grid-cols-4">
        {weatherStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <img src={stat.icon} alt={stat.label} className="w-7" />
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
