export const initialState = {
  page: 1,
  users: [],
  user: null,
  isLoading: false,
  isLoadingUser: false,
  errorUser: null,
  isSaving: false,
  id: null,
  createdAt: null,
};

export const usersListPayload = {
  page: 1,
  users: [
    {
      id: 1,
      email: "jhon@reqres.in",
      first_name: "Jhon",
      last_name: "Doe",
      avatar: "https://anything01.com/img01.jpg",
    },
  ],
};
