import { BaaseUrl } from "./BaaseUrl";
import commonApi from "./commonApi";

export const getTodo = async () => {
  return await commonApi("get", `${BaaseUrl}/todo`, "");
};

export const createTodo = async (requestBody) => {
  return await commonApi("post", `${BaaseUrl}/todo`, requestBody);
};

export const deleteTodo = async (id) => {
  return await commonApi("delete", `${BaaseUrl}/todo/${id}`, {});
};

export const updateTodo = async (id, requestBody) => {
  return await commonApi("put", `${BaaseUrl}/todo/${id}`, requestBody);
};
