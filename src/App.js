import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  userDataFromLocalStorage,
  removeuserDataFromLocalStorage,
} from "./Store/Reducers/AuthReducer";
import { getUserDataFunc, setUserDataFunc } from "./App/user";
import AppRoutes from "./Navigation";

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  React.useEffect(() => {
    (async () => {
      getUserDataFunc().then((res) => {
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

  return (
    <>
      <UserAuthenticated />
      <AppRoutes />
    </>
  );
}

export default App;
