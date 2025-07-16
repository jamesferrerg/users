import { usersSlice } from "../../src/store/slices/usersSlice";
import { store } from "../../src/store/store";


describe("Prueba en el store", () => {
  test("debe tener el estado inicial correcto para users", async () => {
    const state = store.getState();

    expect(state).toEqual({users: usersSlice.getInitialState()})
  });
});
