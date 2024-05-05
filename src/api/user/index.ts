import { client, config } from "../index";

const getAllFriendRequest = async () => {
  try {
    const respone = await client.get("/user/getAllFriendRequest", config);
    return respone.data;
  } catch (error) {
    console.log(error);
    throw new Error("Sign up failed");
  }
};

export { getAllFriendRequest };
