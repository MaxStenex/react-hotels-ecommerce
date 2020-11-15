import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/maxstenex/react-hotels-ecommerce",
});
