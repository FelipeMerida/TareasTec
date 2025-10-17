// cypress/e2e/login.cy.js

describe('Login simple', () => {
  it('Muestra el formulario de login', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[data-cy="email"]').should('exist');
    cy.get('[data-cy="password"]').should('exist');
    cy.get('[data-cy="submit"]').should('exist');
  });

  it('No deja entrar con datos incorrectos', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[data-cy="email"]').type('erroneo@correo.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]').should('contain', 'Credenciales inválidas');
  });

  it('Permite entrar con datos correctos', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[data-cy="email"]').type('test@correcto.com');
    cy.get('[data-cy="password"]').type('contrasena123');
    cy.get('[data-cy="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.get('[data-cy="dashboard-title"]').should('contain', 'Bienvenido');
  });
});
