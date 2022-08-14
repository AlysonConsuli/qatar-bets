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
  it("should enter on add-bet page", () => {
    cy.visit(`${URL}/homepage`);

    cy.get("a:first-child").find("article").click();
    cy.url().should("equal", `${URL}/add-bets`);
  });
});
