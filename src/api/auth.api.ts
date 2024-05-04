import { client, config } from ".";

const signUpUser = async (userInfor: UserInfo) => {
  try {
    const respone = await client.post("/user/signup", userInfor, config);
    return respone.data;
  } catch (error) {
    console.log(error);
    throw new Error("Sign up failed");
  }
};

export { signUpUser };
