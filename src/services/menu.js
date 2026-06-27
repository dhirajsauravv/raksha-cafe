import axios from "./axiosClient";

async function getMenuItems() {
  return await axios.get("/menu");
}

export { getMenuItems };
