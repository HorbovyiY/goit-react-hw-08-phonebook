import { Contacts } from "../pages/Contacts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(refreshUser());
  },[dispatch])

return(
    <div>
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      </Routes>
    </div>
  );
};
