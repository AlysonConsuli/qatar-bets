/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";
const user = {
  name: faker.name.fullName(),
  password: faker.internet.password(),
};

beforeEach(() => {
  cy.resetAllData();
  cy.createGame();
  cy.createUserAndLogin(user);
});

describe("add-bets test suite", () => {
  it("should add bet", () => {
    cy.postPayment();
    cy.visit(`${URL}/add-bets`);

    cy.get("form")
      .find("div:first-child")
      .find("input")
      .type(+faker.random.numeric(1));
    cy.get("form")
      .find("div:last-child")
      .find("input")
      .type(+faker.random.numeric(1));
    cy.intercept("POST", "/bet").as("postBet");
    cy.get("button").click();
    cy.wait("@postBet").its("response.statusCode").should("eq", 201);
  });
});
