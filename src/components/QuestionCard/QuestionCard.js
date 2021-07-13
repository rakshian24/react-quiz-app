import React from "react";
import "./QuestionCard.style.css"

const QuestionCard = ({ title }) => {
  return <div className="question">{title}</div>;
};

export default QuestionCard;
