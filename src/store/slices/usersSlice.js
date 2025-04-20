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
    isSaving: false,
    id: null,
    createdAt: null
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
      state.id = null;
    },
    startSavingUser: (state) => {
      state.isSaving = true;
    },
    savedUserSuccesfully: (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
      state.createdAt = action.payload.createdAt;
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
  startSavingUser,
  savedUserSuccesfully,
} = usersSlice.actions;
