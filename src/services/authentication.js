import axios from "./axiosClient";

async function postSignUpData(name, email, password) {
  return await axios.post("/user/register", {
    name,
    email,
    password,
  });
}

async function postSignInData(email, password) {
  return await axios.post("/user/login", {
    email,
    password,
  });
}

export { postSignInData, postSignUpData };
