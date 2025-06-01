import {
  clearUser,
  savedUserSuccesfully,
  setErrorUser,
  setMainUsers,
  setUser,
  startLoadingUsers,
  startSavingUser,
  usersSlice,
} from "../../../src/store/slices/usersSlice";
import {
  initialState,
  userErrorPayload,
  userPayload,
  userSavedPayload,
  usersListPayload,
} from "../../fixtures/usersState";

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

  test("debe listar un unico usuario", () => {
    const state = usersSlice.reducer(initialState, setUser(userPayload));
    expect(state).toEqual({
      ...initialState,
      user: userPayload,
      isLoading: false,
    });
  });

  test("debe cambiar errorUser cuando existe un error", () => {
    const state = usersSlice.reducer(
      initialState,
      setErrorUser(userErrorPayload)
    );
    expect(state).toEqual({
      ...initialState,
      errorUser: userErrorPayload,
    });
    expect(state.errorUser).not.toBeNull();
  });

  test("debe limpiar o reiniciar valores del usuario", () => {
    const state = usersSlice.reducer(
      {
        ...initialState,
        user: userPayload,
        id: 1,
        errorUser: userErrorPayload,
      },
      clearUser(initialState)
    );
    expect(state).toEqual(initialState);
  });

  test("debe cambiar startSavingUser", () => {
    const state = usersSlice.reducer(
      initialState,
      startSavingUser({ isSaving: true })
    );
    expect(state.isSaving).toBeTruthy();
  });

  test("debe guardar usuario", () => {
    const state = usersSlice.reducer(
      { ...initialState, user: userPayload },
      savedUserSuccesfully(userSavedPayload)
    );
    expect(state.createdAt).not.toBeNull();
  });
});
