import { usersApi } from "../../src/api/usersApi";

describe("Pruebas en el usersApi", () => {
  test("debe de tener la configuracion por defecto", () => {
    expect(usersApi.defaults.baseURL).toBe("https://reqres.in/api");
  });
});
