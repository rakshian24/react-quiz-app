import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./QuestionAnswer.style.css";

const QuestionAnswer = ({ question, handleSelectedAnswer }) => {
  const { name = "", options, id: questionId } = question;
  const optionsArr = options.split(",");

  const handleSelectedOption = (e, selectedOption) => {
    handleSelectedAnswer(selectedOption, questionId)
  }

  return (
    <div className="qa-container">
      <QuestionCard title={name} />
      <div className="answer-container">
        {optionsArr.length > 0 &&
          optionsArr.map((option, index) => (
            <AnswerCard
              option={option}
              key={index}
              handleSelectedAnswer={handleSelectedOption}
            />
          ))}
      </div>
    </div>
  );
};

export default QuestionAnswer;
