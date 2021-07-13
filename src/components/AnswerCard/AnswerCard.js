import React from "react";
import "./AnswerCard.style.css";

const AnswerCard = ({ option, handleSelectedAnswer }) => {
  
  return (
    <div
      className="answer-value-1 answer-card"
      onClick={(e) => handleSelectedAnswer(e, option)}
    >
      <div className="radio-btn">
        <input type="radio" value={option} />
      </div>
      <div className="answer">{option}</div>
    </div>
  );
};

export default AnswerCard;
