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

Cypress.Commands.add("createUser", (user) => {
  cy.request("POST", `${BACKEND_URL}/sign-up`, user);
});

Cypress.Commands.add("createUserAndLogin", (user) => {
  cy.request("POST", `${BACKEND_URL}/sign-up`, user).then(() => {
    cy.request({
      method: "POST",
      url: `${BACKEND_URL}/sign-in`,
      body: user,
    }).then((resp) => {
      const userSerialized = JSON.stringify(resp.body);
      window.localStorage.setItem("user", userSerialized);
    });
  });
});

Cypress.Commands.add("createGame", (user) => {
  cy.request({
    method: "POST",
    url: `${BACKEND_URL}/create-game`,
    headers,
  });
});
