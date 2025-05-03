import {
  setMainUsers,
  startLoadingUsers,
  usersSlice,
} from "../../../src/store/slices/usersSlice";
import { initialState, usersListPayload } from "../../fixtures/usersState";

describe("Pruebas en usersSlice", () => {
  test("debe de regresar el estado por defecto", () => {
    //console.log(usersSlice.getInitialState());
    expect(usersSlice.getInitialState()).toEqual(initialState);
  });

  test("debe de cambiar isLoading correctamente", () => {
    let state = usersSlice.getInitialState();
    state = usersSlice.reducer(state, startLoadingUsers());
    expect(state.isLoading).toBeTruthy();
  });

  test("debe listar los usuarios", () => {
    const state = usersSlice.reducer(
      initialState,
      setMainUsers(usersListPayload)
    );
    expect(state).toEqual({
      ...initialState,
      page: 1,
      users: usersListPayload.users,
      isLoading: false,
    });
  });
});
