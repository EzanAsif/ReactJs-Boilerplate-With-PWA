import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, DemoScreen } from "../Pages/index";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const reducerData = useSelector((state) => state);
  const { auth } = reducerData;
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    if (auth.userData && auth.userData.userId) {
      setUserData(auth.userData);
    } else {
      setUserData(null);
    }
  }, [reducerData]);

  return (
    <Routes>
      {userData && userData.userId ? (
        <>
          <Route path="/" element={<DemoScreen />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
          <Route path="*" element={<>Page not found</>} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<>Page not found</>} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
