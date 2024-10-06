import React from "react";
import { mount } from "cypress/react";
import WeatherDetails from "../../../src/components/WeatherCard/WeatherDetails";
import { CurrentWeather } from "../../../src/types/weather";

describe("WeatherDetails component", () => {
  it("should display current date's weather information", () => {
    const mockWeather: CurrentWeather = {
      city: "Brisbane",
      date: "27-09-2024",
      currentTemperature: "26",
      temperature: "18 ~ 28",
      conditionText: "Partly Cloudy",
      png: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      bgPng: "/__cypress/src/src/assets/background/Cloudy_day_background.png",
      vars: {
        avgHumidity: "50%",
        windSpeed: "17.8km/h",
        pm2_5: "23µg",
        avgTemperature: "24˚",
      },
    };

    const humidityIcon = "/__cypress/src/src/assets/meta_icon/humidity.svg";
    const windSpeedIcon = "/__cypress/src/src/assets/meta_icon/wind_speed.svg";
    const pm25Icon = "/__cypress/src/src/assets/meta_icon/PM2.5.svg";
    const feelslikeIcon =
      "/__cypress/src/src/assets/meta_icon/Somatosensory_temperature.svg";

    mount(<WeatherDetails weather={mockWeather} />);

    cy.get("p").first().contains(mockWeather.date);
    cy.get("h4").contains(mockWeather.city);
    cy.get("h3").contains(mockWeather.currentTemperature);
    cy.get("p").eq(1).contains(mockWeather.temperature);
    cy.get("img").first().should("have.attr", "src", mockWeather.png);
    cy.get("img[alt='humidity icon']").should("have.attr", "src", humidityIcon);
    cy.get("p").eq(2).contains(mockWeather.vars.avgHumidity);
    cy.get("img[alt='wind speed icon']").should(
      "have.attr",
      "src",
      windSpeedIcon,
    );
    cy.get("p").eq(3).contains(mockWeather.vars.windSpeed);
    cy.get("img[alt='PM 2.5 icon']").should("have.attr", "src", pm25Icon);
    cy.get("p").eq(4).contains(mockWeather.vars.pm2_5);
    cy.get("img[alt='Average temperature icon']").should(
      "have.attr",
      "src",
      feelslikeIcon,
    );
    cy.get("p").last().contains(mockWeather.vars.avgTemperature);
  });
});
