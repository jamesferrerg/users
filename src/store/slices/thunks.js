import { usersApi } from "../../api/usersApi";
import {
  setMainUsers,
  startLoadingUsers,
  startLoadingUser,
  setUser,
  setErrorUser,
  startSavingUser,
  savedUserSuccesfully,
} from "./usersSlice";

export const getUsers = (page) => {
  return async (dispatch) => {
    dispatch(startLoadingUsers());

    const { data } = await usersApi.get(`users?page=${page}`);

    dispatch(setMainUsers({ users: data, page: page }));
  };
};

export const getUserById = (userId) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());
    try {
      const { data } = await usersApi.get(`users/${userId}`);
      dispatch(setUser({ user: data }));
    } catch (error) {
      dispatch(setErrorUser({ errorUser: error }));
    }
  };
};

export const savingUser = (name, job) => {
  return async (dispatch) => {
    dispatch(startSavingUser());

    const { data } = await usersApi.post("users", { name, job });

    dispatch(
      savedUserSuccesfully({
        name: data.name,
        job: data.job,
        id: data.id,
        createdAt: data.createdAt,
      })
    );
  };
};
