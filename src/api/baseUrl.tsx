import axios from "axios";

const axiosBase = axios.create({
  baseURL: "146.190.118.121/api",
  headers: { Authorization: "Bearer(******)" },
});

export { axiosBase };
