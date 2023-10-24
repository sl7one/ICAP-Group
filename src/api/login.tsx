import { LoginTypes } from "../types/login.types";
import { axiosBase } from "./baseUrl";

export const signUp = (userData: LoginTypes) => {
  return axiosBase.post("/login", userData);
};
