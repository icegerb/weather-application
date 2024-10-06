import { mount } from "cypress/react";
import SearchBar from "../../../src/components/WeatherCard/SearchBar";

describe("SearchBar component", () => {
  it("should update input value when click on button", () => {
    const setCityStub = cy.stub();
    mount(<SearchBar setCity={setCityStub} />);

    cy.get('input[type="text"]').type("Sydney");
    cy.get('input[type="text"]').should("have.value", "Sydney");

    cy.get("button").click();
    cy.wrap(setCityStub).should("have.been.calledWith", "Sydney");
  });
});
