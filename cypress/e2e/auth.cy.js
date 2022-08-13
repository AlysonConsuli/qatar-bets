/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";
const user = {
  name: faker.name.fullName(),
  password: faker.internet.password(),
};

beforeEach(() => {
  cy.resetAllData();
});

describe("auth tests", () => {
  it("should create a user", () => {
    cy.visit(`${URL}/sign-up`);
    cy.get("#name").type(user.name);
    cy.get("#password").type(user.password);
    cy.get("#passwordConfirmation").type(user.password);

    cy.intercept("POST", "/sign-up").as("sign-up");
    cy.get("button").click();
    cy.wait("@sign-up").its("response.statusCode").should("eq", 201);
  });
});
