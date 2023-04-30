import { Contacts } from "../pages/Contacts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

export const App = () => {
return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
  >
    
    <Routes>
      <Route path="/" element={ <Navigation/>}>
        <Route index path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      </Routes>
    </div>
  );
};
