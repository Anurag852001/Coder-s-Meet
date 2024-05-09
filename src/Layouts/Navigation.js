import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../Assets/images/logo.png";
const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };
  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${classes.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src={logo} alt="logo"></img>
        <span style={logoText}>Coder's Meet</span>
      </Link>
    </nav>
  );
};
export default Navigation;
