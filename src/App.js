import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { userDataFromLocalStorage } from "./Store/Reducers/AuthReducer";
import { getUserDataFunc } from "./App/user";
import AppRoutes from "./Navigation";

const UserAuthenticated = () => {
  const dispatch = useDispatch();
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
  return (
    <>
      <UserAuthenticated />
      <AppRoutes />
    </>
  );
}

export default App;
