import { ROUTES } from "../../src/router/routesConfig";
import { CreatePage, HomePage, SearchPage } from "../../src/Users/pages";
import { UsersApp } from "../../src/UsersApp";

describe("Pruebas en routesConfig", () => {
  test("debe tener la estructura correcta", () => {
    const rootRoute = ROUTES[0];

    expect(rootRoute.path).toBe("/");
    expect(rootRoute.element.type).toBe(UsersApp);
    
    expect(rootRoute.children).toHaveLength(3);
    expect(rootRoute.children[0].element.type).toBe(HomePage);
    expect(rootRoute.children[1].element.type).toBe(CreatePage);
    expect(rootRoute.children[2].element.type).toBe(SearchPage);
  });
});
