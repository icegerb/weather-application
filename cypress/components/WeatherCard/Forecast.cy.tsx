import React from "react";
import { mount } from "cypress/react";
import Forecast from "../../../src/components/WeatherCard/Forecast";

describe("Forecast component", () => {
  it("should display a weather list of upcoming days", () => {
    const mockFutureWeatherList = [
      {
        conditionText: "Sunny",
        png: "path/to/sunny-icon.png", // 替换为实际图标路径
        week: "Monday",
        date: "03 October",
        temperature: "18 ~ 28°C",
      },
      {
        conditionText: "Cloudy",
        png: "path/to/cloudy-icon.png", // 替换为实际图标路径
        week: "Tuesday",
        date: "04 October",
        temperature: "16 ~ 24°C",
      },
      {
        conditionText: "Rainy",
        png: "path/to/rainy-icon.png", // 替换为实际图标路径
        week: "Wednesday",
        date: "05 October",
        temperature: "15 ~ 22°C",
      },
      {
        conditionText: "Foggy",
        png: "path/to/foggy-icon.png", // 替换为实际图标路径
        week: "Thursday",
        date: "06 October",
        temperature: "14 ~ 21°C",
      },
      {
        conditionText: "Partly Cloudy",
        png: "path/to/partly-cloudy-icon.png", // 替换为实际图标路径
        week: "Friday",
        date: "07 October",
        temperature: "17 ~ 26°C",
      },
    ];

    mount(<Forecast weatherList={mockFutureWeatherList} />);

    mockFutureWeatherList.slice(1).forEach((weather) => {
      cy.get("h4").contains(weather.week);
      cy.contains(weather.date);
      cy.get("img").should("exist");
      cy.contains(weather.temperature);
    });
  });
});
