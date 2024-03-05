import axios from "axios";

const jsonPlaceholder = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const getTodos = async () => {
  return await jsonPlaceholder
    .get("/todos")
    .then((res) => res.data)
    .catch((err) => err);
};

export const getUsers = async () => {
  return await jsonPlaceholder
    .get("/users")
    .then((res) => res.data.data)
    .catch((err) => err);
};

export default getTodos;
