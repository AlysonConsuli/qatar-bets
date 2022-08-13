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

describe("sign-up page test suite", () => {
  it("should create a user", () => {
    cy.visit(`${URL}/sign-up`);
    cy.get("#name").type(user.name);
    cy.get("#password").type(user.password);
    cy.get("#passwordConfirmation").type(user.password);

    cy.intercept("POST", "/sign-up").as("sign-up");
    cy.get("button").click();
    cy.wait("@sign-up").its("response.statusCode").should("eq", 201);
  });

  it("given a user with same name that other, receive 409", () => {
    cy.createUser(user);
    cy.visit(`${URL}/sign-up`);

    cy.get("#name").type(user.name);
    cy.get("#password").type(user.password);
    cy.get("#passwordConfirmation").type(user.password);
    cy.intercept("POST", "/sign-up").as("sign-up");
    cy.get("button").click();
    cy.wait("@sign-up").its("response.statusCode").should("eq", 409);
  });

  it("given a passwordConfirmation different from password, receive 422", () => {
    cy.visit(`${URL}/sign-up`);

    cy.get("#name").type(user.name);
    cy.get("#password").type(user.password);
    cy.get("#passwordConfirmation").type("wrong_password");
    cy.intercept("POST", "/sign-up").as("sign-up");
    cy.get("button").click();
    cy.wait("@sign-up").its("response.statusCode").should("eq", 422);
  });

  it("should go to sign-up page and back to sign-in page", () => {
    cy.visit(`${URL}/`);

    cy.get("a").click();
    cy.url().should("equal", `${URL}/sign-up`);

    cy.get("a").click();
    cy.url().should("equal", `${URL}/`);
  });
});
