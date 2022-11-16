export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5050"
    : "https://todo-app-yashiro.herokuapp.com";
