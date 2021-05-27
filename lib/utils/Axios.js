import axios from "axios";

let urls = {
  test: `https://i-can-backend.herokuapp.com`,
  development: "https://i-can-backend.herokuapp.com/",
  production: "https://i-can-backend.herokuapp.com/",
};

const Axios = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default Axios;
