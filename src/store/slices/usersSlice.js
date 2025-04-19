import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    page: 1,
    users: [],
    user: null,
    isLoading: false,
    isLoadingUser: false,
    errorUser: null,
  },
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setMainUsers: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.users = action.payload.users;
    },
    startLoadingUser: (state) => {
      state.isLoadingUser = true;
      state.errorUser = null;
    },
    setUser: (state, action) => {
      state.isLoadingUser = false;
      state.user = action.payload;
    },
    setErrorUser: (state, action) => {
      state.isLoadingUser = false;
      state.errorUser = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.errorUser = null;
    },
  },
});

export const {
  startLoadingUsers,
  setMainUsers,
  startLoadingUser,
  setUser,
  setErrorUser,
  clearUser,
} = usersSlice.actions;
