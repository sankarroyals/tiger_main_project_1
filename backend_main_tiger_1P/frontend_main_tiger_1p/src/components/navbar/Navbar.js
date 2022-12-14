import { Link } from "react-router-dom";
import "./navbar.scss";


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h6><strong style={{
            top: "16px",
            left: "220px",
            width: "61px",
            height: "19px",
            textAlign: "left",
            font: "normal normal 900 16px/31px Helvetica ",
            letterSpacing: "0.13px",
            color: "#22252A",
            textTransform: "uppercase",
            opacity: "1",
          }}>Tiger Data Validation</strong></h6>
        </Link>
        <div className="items">
          <div className="item">
            <p> </p>
          </div>
          <div className="item">
            <p> </p>
          </div>
          <div className="item">
            <p> </p>
          </div>
          <div className="item">
            <p> </p>
          </div>
          <div className="item">
            <p> </p>
          </div>
          <div className="item">
            <p></p>
          </div>
          <div className="item">
            <p></p>
          </div>
          <div className="item">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
