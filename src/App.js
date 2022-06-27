import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Layouts/Navigation";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Authenticate from "./Pages/Authetication/Authenticate";

const isAuth = true;
function App() {
  const pathObj = {
    pathName: isAuth ? "/Login" : "/Register",
    pathElement: isAuth ? Login : Register,
  };
  const Element = pathObj.pathElement;
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Authenticate" element={<Authenticate></Authenticate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
