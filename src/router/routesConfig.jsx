import { HomePage, CreatePage, SearchPage } from "../Users/pages";
import { UsersApp } from "../UsersApp";

export const ROUTES = [
  {
    path: "/",
    element: <UsersApp />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "create", element: <CreatePage /> },
      { path: "search", element: <SearchPage /> }
    ],
  },
];
