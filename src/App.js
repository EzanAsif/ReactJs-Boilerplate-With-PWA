import React from "react";
import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./Store/index";
import { userDataFromLocalStorage } from "./Store/Reducers/AuthReducer";

const userDataFunc = async () => {
  try {
    let value;
    value = await localStorage.getItem("token").then((res) => {
      return res;
    });
    return value;
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
  }, []);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <UserAuthenticated />
      <div className="App">
        <p>Running</p>
      </div>
    </Provider>
  );
}

export default App;
