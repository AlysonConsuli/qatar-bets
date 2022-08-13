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
  it("should create a recommendation", () => {
    cy.visit(`${URL}/`);
    //cy.get("#name").type(user.name);

    cy.url().should("equal", `${URL}/`);
  });
});
