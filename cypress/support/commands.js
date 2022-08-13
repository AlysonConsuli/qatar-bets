const BACKEND_URL = "http://localhost:5000";

const token = Cypress.env("token");

const headers = {
  Authorization: `Bearer ${token}`,
};

Cypress.Commands.add("resetAllData", () => {
  cy.log("reset all data");
  cy.request({
    method: "POST",
    url: `${BACKEND_URL}/reset`,
    headers,
  });
});
