import React from "react";
import { removeuserDataFromLocalStorage } from "../../Store/Reducers/AuthReducer";
import { useDispatch } from "react-redux";
const DemoScreen = () => {
  const dispatch = useDispatch();
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
      <div>This is demo screen</div>
      <div className="App">
        <p>Running</p>
        <button onClick={removeToken}>Logout</button>
      </div>
    </>
  );
};

export default DemoScreen;
