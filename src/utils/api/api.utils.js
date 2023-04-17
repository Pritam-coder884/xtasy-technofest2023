import axios from "axios";



export const UpdateUserDetails = async ({accessToken,userRegister}) => {
    console.log(accessToken);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/updateDetails",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {userRegister},
      );
    // console.log(userRegister);
      return response.data.data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
