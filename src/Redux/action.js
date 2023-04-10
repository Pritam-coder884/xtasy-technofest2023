import * as types from "./actionType";
import { createAuthUserWithEmailAndPassword } from "../utils/firbase/firebase.utils";
import { toast } from "react-toastify";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, name) => {
  return function (dispatch) {
    dispatch(registerStart());
    return new Promise((resolve, reject) => {
      createAuthUserWithEmailAndPassword(email, password)
        .then((user) => {
          resolve(dispatch(registerSuccess(user)));
        })
        .catch((error) => {
          if (error.code === "auth/weak-password") {
            toast.error("Password should be at least 6 characters");
          }
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }

          reject(dispatch(registerFail(error)));
        });
    });
  };
};

