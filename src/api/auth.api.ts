import { client, config } from ".";
import Cookies from "js-cookie";
const signUpUser = async (userInfor: UserInfo) => {
  try {
    const respone = await client.post("/user/signup", userInfor, config);
    return respone.data;
  } catch (error) {
    console.log(error);
    throw new Error("Sign up failed");
  }
};

const login = async (userLogin: UserLogin) => {
  try {
    const respone = await client.post("/user/login", userLogin, config);
    return respone.data;
  } catch (error) {
    console.log(error);
    throw new Error("Sign up failed");
  }
};

export { signUpUser, login };
