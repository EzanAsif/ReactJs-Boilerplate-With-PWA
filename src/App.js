import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { userDataFromLocalStorage } from "./Store/Reducers/AuthReducer";

const userDataFunc = async () => {
  try {
    let value;
    value = await localStorage.getItem("token");
    if (value) return value;
  } catch (e) {
    console.log(e);
  }
};

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(`this is state`);
  console.log(state);
  React.useEffect(() => {
    (async () => {
      userDataFunc().then((res) => {
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
      // debugger;
      // const jsonValue = JSON.stringify(value);
      const v = {
        userId: "3123-123-123123-3145",
      };
      console.log(v, "v");
      await localStorage.setItem("token", JSON.stringify(v));
      let userToken = await localStorage.getItem("token");
      console.log(userToken);
      if (userToken) {
        let parsedUserData = JSON.parse(userToken);
        dispatch(userDataFromLocalStorage(parsedUserData));
      }
      // return userToken;
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
      </div>
    </>
  );
}

export default App;
