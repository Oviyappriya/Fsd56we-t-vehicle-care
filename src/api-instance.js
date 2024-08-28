import axios from "axios";
const instance = axios.create({
  baseURL: "https://fsd-vehiclecare-back.onrender.com/",

  headers: {
    "Customer-Header": "Hi Heloo",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("authToken");
  return config;
});
export default instance;