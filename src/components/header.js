import { Link } from "react-router-dom";
import reaskLogo from "../images/reaskLogo.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="main-nav-bar">
      <div className="link-div">
        <Link className={"home-logo link"} to="/" exact={true}>
          <img className="reask-logo" src={reaskLogo} alt="Reask logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
