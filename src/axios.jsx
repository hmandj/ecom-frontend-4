import axios from "axios";

const API = axios.create({
  baseURL: "https://orange-succotash-r9vg59657pvcx9p7-8080.app.github.dev/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
