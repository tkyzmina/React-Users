import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
