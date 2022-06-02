import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { userDataFromLocalStorage } from "./Store/Reducers/AuthReducer";
import { getUserDataFunc, setUserDataFunc } from "./App/user";
import { removeuserDataFromLocalStorage } from "./Store/Reducers/AuthReducer";

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(`this is state`);
  console.log(state);
  React.useEffect(() => {
    (async () => {
      getUserDataFunc().then((res) => {
        console.log("this is res in App");
        console.log(res);
        let v;
        if (res) v = JSON.parse(res);
        if (v && v.userId) {
          dispatch(userDataFromLocalStorage(v));
        }
      });
    })().catch((err) => {
      console.error(err);
    });
  }, [localStorage]);

  return null;
};

function App() {
  const dispatch = useDispatch();

  const setToken = async (value) => {
    try {
      const v = {
        userId: "5555-1275673-123123-3145",
      };
      console.log(v, "v");
      let userToken = await setUserDataFunc(v);
      if (userToken) {
        let parsedUserData = JSON.parse(userToken);
        dispatch(userDataFromLocalStorage(parsedUserData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeToken = async () => {
    try {
      await localStorage.removeItem("token");
      dispatch(removeuserDataFromLocalStorage());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <UserAuthenticated />
      <div className="App">
        <p>Running</p>
        <button onClick={setToken}>Login</button>
        <button onClick={removeToken}>Logout</button>
      </div>
    </>
  );
}

export default App;
