import { Contacts } from "../pages/Contacts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(refreshUser());
  },[dispatch])

return(
    <div>
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route index path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      </Routes>
    </div>
  );
};
