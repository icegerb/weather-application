import React from "react";
import { mount } from "cypress/react18";
import WeatherCard from "../../../src/components/WeatherCard/WeatherCard";

describe("WeatherCard Component", () => {
  const mockWeatherData = {
    location: {
      name: "Sydney",
      localtime: "2024-09-29T12:00:00",
    },
    current: {
      temp_c: 22,
      condition: {
        text: "Sunny",
        icon: "http://example.com/icon.png",
      },
      humidity: 60,
      wind_kph: 15,
      air_quality: {
        pm2_5: 12,
      },
      feelslike_c: 21,
    },
    forecast: {
      forecastday: [
        {
          date: "2024-09-30",
          day: {
            condition: {
              text: "Sunny",
              icon: "http://example.com/icon.png",
            },
            mintemp_c: 18,
            maxtemp_c: 24,
          },
        },
      ],
    },
  };

  beforeEach(() => {
    cy.intercept("GET", "http://api.weatherapi.com/v1/forecast.json*", {
      body: mockWeatherData,
    }).as("fetchWeather");
    mount(<WeatherCard />);
  });

  it("should fetch and display weather data for Sydney", () => {
    cy.wait("@fetchWeather");
  });
});
