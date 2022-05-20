import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  return (
    <>
      <div className="homeContainer">
        <div>
          <h1>
            Ascension <br />
            Online Care
          </h1>
          <p>
            Talk to a doctor 24/7, anytime, anywhere for your
            <br />
            urgent care needs, Have questions before you get <br />
            started?{" "}
            <span>
              <a href="/">Learn more</a>
            </span>
          </p>
            <Link className="login" to="/login">
              LOG IN
            </Link>
          <Link className="signup" to="/signup">
            SIGN UP
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
