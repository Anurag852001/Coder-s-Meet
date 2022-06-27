import classes from "./Home.module.css";
import Card from "../../Layouts/Card";
import Button from "../../Layouts/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";

const Home = () => {
  const linkStyle = {
    color: "#0077ff",
    textDecoration: "none",
    fontWwight: "bold",
    marginLeft: "10px",
  };
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/Authenticate");
  };

  return (
    <div className={classes.CardWrapper}>
      <Card heading="Welcome to Coder's meet!!!" type="home">
        <p className={classes.text}>
          We’re working hard to get Coder'sMeet ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <Button
          name="Get your Username"
          onClickHandler={onClickHandler}
        ></Button>
        <div className={classes.signInWrapper}>
          <h4>Have an invite text?</h4>
          <Link to="/" style={linkStyle}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};
export default Home;
