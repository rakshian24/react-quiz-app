import React from "react";
import { QUIZ_TIME_LIMIT } from "../../constant";
import "./ProgressBar.style.css";

const ProgressBar = ({ progress }) => {
  return (
    <progress
      value={progress}
      max={QUIZ_TIME_LIMIT}
      className="progress"
    ></progress>
  );
};

export default ProgressBar;
