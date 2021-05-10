import axios from "axios";

let urls = {
  test: `https://ican-backend.herokuapp.com`,
  development: "https://ican-backend.herokuapp.com/",
  production: "https://ican-backend.herokuapp.com/",
};

const Axios = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default Axios;
