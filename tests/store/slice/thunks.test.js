import { usersApi } from "../../../src/api/usersApi";
import {
  getUserById,
  getUsers,
  savingUser,
} from "../../../src/store/slices/thunks";
import {
  savedUserSuccesfully,
  setMainUsers,
  setUser,
  startLoadingUser,
  startLoadingUsers,
  startSavingUser,
} from "../../../src/store/slices/usersSlice";

jest.mock("../../../src/api/usersApi");

const mockData = {
  data: [
    { id: 1, name: "Juan",  job: "Any-01", createdAt: "2025-05-12"},
    { id: 2, name: "Ana", job: "Any-02", createdAt: "2025-05-19" },
  ],
  total: 2,
};

const page = 1;

describe("Pruebas en UsersThunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("getUsers debe obtener los usuarios y despachar acciones", async () => {
    usersApi.get.mockResolvedValueOnce({ data: mockData });
    await getUsers(page)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(startLoadingUsers());
    expect(dispatch).toHaveBeenCalledWith(
      setMainUsers({ users: mockData, page })
    );
  });

  test("getUserById debe obtener un unico usuario y despachar acciones", async () => {
    usersApi.get.mockResolvedValueOnce({ data: mockData.data[0] });
    await getUserById(1)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(startLoadingUser());
    expect(dispatch).toHaveBeenCalledWith(setUser({ user: mockData.data[0] }));
  });

  test("savingUser debe guardar un usuarios y despachar acciones", async () => {
    usersApi.post.mockResolvedValueOnce({ data: mockData.data[0] });
    await savingUser("Juan", "Any-01")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(startSavingUser());
    expect(dispatch).toHaveBeenCalledWith(savedUserSuccesfully({...mockData.data[0]}));
  });
});
