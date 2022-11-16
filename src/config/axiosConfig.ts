import axiosBase from "axios";
import { BASE_URL } from './urlConfig'

const axios = axiosBase.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  responseType: "json",
  withCredentials: true,
});

export default axios;
