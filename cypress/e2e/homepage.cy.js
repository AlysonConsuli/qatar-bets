/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";
const user = {
  name: faker.name.fullName(),
  password: faker.internet.password(),
};

beforeEach(() => {
  cy.resetAllData();
  cy.createUserAndLogin(user);
});

describe("homepage test suite", () => {
  it("should enter on add-bet page", () => {
    cy.visit(`${URL}/homepage`);

    cy.get("a:first-child").find("article").click();
    cy.url().should("equal", `${URL}/add-bets`);
  });

  it("should enter on games page", () => {
    cy.visit(`${URL}/homepage`);

    cy.get("a:nth-child(2)").find("article").click();
    cy.url().should("equal", `${URL}/games`);
  });

  it("should enter on ranking page", () => {
    cy.visit(`${URL}/homepage`);

    cy.get("a:nth-child(3)").find("article").click();
    cy.url().should("equal", `${URL}/ranking`);
  });

  it("should enter on rules page", () => {
    cy.visit(`${URL}/homepage`);

    cy.get("a:nth-child(4)").find("article").click();
    cy.url().should("equal", `${URL}/rules`);
  });
});
