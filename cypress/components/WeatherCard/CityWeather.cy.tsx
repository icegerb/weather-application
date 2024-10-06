import { mount } from "cypress/react18";
import CityWeather from "../../../src/components/WeatherCard/CityWeather";
import { CurrentWeather } from "../../../src/types/weather";
import { City } from "../../../src/types/city";

describe("<CityWeather />", () => {
  it("renders city cards with weather data", () => {
    const mockSetCity = cy.stub().as("setCity");

    const mockCitiesWeather: CurrentWeather[] = [
      {
        city: "Sydney",
        date: "2024-10-02",
        currentTemperature: "25°C",
        temperature: "20 ~ 30°C",
        conditionText: "Sunny",
        png: "/__cypress/src/src/assets/weather_icon/Cloudy_day.png",
        bgPng: "",
        vars: {
          windSpeed: "15 km/h",
          avgTemperature: "22°C",
          avgHumidity: "60%",
          pm2_5: "10 µg/m³",
        },
      },
      {
        city: "Shanghai",
        date: "2024-10-02",
        currentTemperature: "20°C",
        temperature: "18 ~ 25°C",
        conditionText: "Cloudy",
        png: "/__cypress/src/src/assets/weather_icon/Cloudy.png",
        bgPng: "",
        vars: {
          windSpeed: "10 km/h",
          avgTemperature: "21°C",
          avgHumidity: "70%",
          pm2_5: "15 µg/m³",
        },
      },
      {
        city: "New York",
        date: "2024-10-02",
        currentTemperature: "15°C",
        temperature: "12 ~ 20°C",
        conditionText: "Rainy",
        png: "/__cypress/src/src/assets/weather_icon/Rain.png",
        bgPng: "",
        vars: {
          windSpeed: "20 km/h",
          avgTemperature: "17°C",
          avgHumidity: "80%",
          pm2_5: "12 µg/m³",
        },
      },
      {
        city: "London",
        date: "2024-10-02",
        currentTemperature: "10°C",
        temperature: "8 ~ 15°C",
        conditionText: "Foggy",
        png: "/__cypress/src/src/assets/weather_icon/Cloudy.png",
        bgPng: "",
        vars: {
          windSpeed: "5 km/h",
          avgTemperature: "11°C",
          avgHumidity: "85%",
          pm2_5: "25 µg/m³",
        },
      },
    ];

    const mockCities: City[] = [
      {
        city: "Sydney",
        background: "/__cypress/src/src/assets/City/Sydney.png",
      },
      {
        city: "Shanghai",
        background: "/__cypress/src/src/assets/City/Shanghai.png",
      },
      {
        city: "New York",
        background: "/__cypress/src/src/assets/City/Newyork.png",
      },
      {
        city: "London",
        background: "/__cypress/src/src/assets/City/London.png",
      },
    ];

    mount(
      <CityWeather
        setCity={mockSetCity}
        citiesWeather={mockCitiesWeather}
        cities={mockCities}
      />,
    );

    mockCitiesWeather.forEach((data) => {
      cy.contains(data.city).should("exist");
      cy.contains(data.temperature).should("exist");
    });
  });
});
