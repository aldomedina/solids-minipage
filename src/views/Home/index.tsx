import React from "react";
import { Link } from "react-router-dom";
import paths from "../../containers/Router/paths";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={style.pageWrapper}>
      <h1>SOLIDS MINIPAGE</h1>
      <h3> Soon...</h3>
      <div>
        <Link to={paths.modelTesting()}>Go to Model Testing Page</Link>
      </div>
    </div>
  );
};

export default HomePage;
