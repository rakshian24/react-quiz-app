import React from "react";
import "./Loader.style.css";
import spinner from "../../assets/images/spinner.gif";

const Loader = () => {
  return (
    <div className="loading-spinner-wrapper">
      <img src={spinner} alt="loading-spinner" className="loading-spinner" />
    </div>
  );
};

export default Loader;
