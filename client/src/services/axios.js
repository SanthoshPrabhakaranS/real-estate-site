import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://real-estate-site-topaz.vercel.app",
});
