import userActionTypes from "./user.types";
import axios from "axios";

// import {openSnackBarAction} from './../snackbar/snackbar.actions';

export const loginUserStart = () => ({
  type: userActionTypes.LOGIN_USER_START,
});

export const loginUserSuccess = (user) => ({
  type: userActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (msg) => ({
  type: userActionTypes.LOGIN_USER_FAILED,
  payload: msg,
});

export const loginUserStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(loginUserStart());
      const fetchUser = await axios.get(
        "https://my-json-server.typicode.com/siddharth-upamanyu/peekameet-fake-data/user"
      );
      console.log(fetchUser);
      if (fetchUser.data) {
        // localStorage.setItem('auth_token',fetchUser.data.data[0].id)
        dispatch(loginUserSuccess(fetchUser.data.data[0]));
      } else {
        dispatch(loginUserFailure(fetchUser.data.msg));
        // dispatch(openSnackBarAction({
        //     severity:"error",
        //     msg : fetchUser.data.msg
        // }));
      }
    } catch (e) {
      dispatch(loginUserFailure("Failed Due To Server"));
      // dispatch(openSnackBarAction({
      //     severity:"error",
      //     msg : "Failed Due To Server"
      // }));
    }
  };
};
