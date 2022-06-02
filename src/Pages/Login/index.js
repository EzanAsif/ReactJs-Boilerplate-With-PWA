import React from "react";
import { userDataFromLocalStorage } from "../../Store/Reducers/AuthReducer";
import { useDispatch } from "react-redux";
import { setUserDataFunc } from "../../App/user";

const Login = () => {
  const dispatch = useDispatch();
  const setToken = async (value) => {
    try {
      const v = {
        userId: "5555-1275673-123123-3145",
      };
      let userToken = await setUserDataFunc(v);
      if (userToken) {
        let parsedUserData = JSON.parse(userToken);
        dispatch(userDataFromLocalStorage(parsedUserData));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>This is login screen</div>

      <button onClick={setToken}>Login</button>
    </>
  );
};

export default Login;
