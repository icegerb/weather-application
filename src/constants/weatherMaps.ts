import Rain from "../assets/weather_icon/Rain.png";
import Sunny from "../assets/weather_icon/Sunny.png";
import Snow from "../assets/weather_icon/Snow.png";
import Cloudy from "../assets/weather_icon/Cloudy.png";
import PartlyCloudy from "../assets/weather_icon/Cloudy_day.png";
import Hail from "../assets/weather_icon/Hail.png";

import SunnyBg from "../assets/background/Sunny day_background.png";
import PartlyCloudyBg from "../assets/background/Cloudy_day_background.png";
import RainBg from "../assets/background/Rain_background.png";
import SnowBg from "../assets/background/Snow_background.png";
import HailBg from "../assets/background/Hail_background.png";

export const weatherIconMap: Record<string, string> = {
  Sunny: Sunny,
  "Partly Cloudy": PartlyCloudy,
  Overcast: Cloudy,
  Cloudy: Cloudy,
  "Light drizzle": Rain,
  "Patchy light drizzle": Rain,
  "Light freezing rain": Rain,
  "Light rain": Rain,
  "Moderate rain": Rain,
  "Heavy rain": Rain,
  "Patchy rain nearby": Rain,
  "Light rain shower": Rain,
  "Light sleet showers": Snow,
  "Light sleet": Snow,
  "Light snow": Snow,
  "Moderate snow": Snow,
  "Heavy snow": Snow,
  "Ice pellets": Hail,
};

export const weatherBgMap: Record<string, string> = {
  Sunny: SunnyBg,
  "Partly Cloudy": PartlyCloudyBg,
  Overcast: PartlyCloudyBg,
  Cloudy: PartlyCloudyBg,
  "Light drizzle": RainBg,
  "Patchy light drizzle": RainBg,
  "Light freezing rain": RainBg,
  "Light rain": RainBg,
  "Moderate rain": RainBg,
  "Heavy rain": RainBg,
  "Patchy rain nearby": RainBg,
  "Light rain shower": RainBg,
  "Light sleet showers": SnowBg,
  "Light sleet": SnowBg,
  "Light snow": SnowBg,
  "Moderate snow": SnowBg,
  "Heavy snow": SnowBg,
  "Ice pellets": HailBg,
};
