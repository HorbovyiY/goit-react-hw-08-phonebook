import { Contacts } from "../pages/Contacts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

export const App = () => {
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
