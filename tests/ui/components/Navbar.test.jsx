import { fireEvent, render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";
import { appRouter } from "../../../src/router/appRouter";
import { Provider } from "react-redux";

describe("Pruebas en <Navbar />", () => {
  test("debe de renderizar los enlaces correctamente", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Fake users").closest("a");
    const createLink = screen.getByText("Create an user").closest("a");
    
    expect(homeLink.getAttribute("href")).toBe("/");
    expect(createLink.getAttribute("href")).toBe("/create");
  });

  test('aplica clase "active" al enlace de la ruta actual', () => {
    render(
      <MemoryRouter initialEntries={['/create']}> {/* Simula ruta activa */}
        <Navbar />
      </MemoryRouter>
    );

    const createLink = screen.getByText('Create an user');

    expect(createLink.classList.contains('active')).toBeTruthy();
  });


});
