import React from "react";
import "./AnsweredCard.style.css"

const AnsweredCard = ({ questionString, question }) => {
  const { ques_id, correct_option, submitted_option } = question;
  return (
    <div className="answered-card">
      <div className={`question-${ques_id}`}>Question: {questionString}</div>
      <div className={`{submitted-answer-${ques_id}}`}>
        Your Answer: {submitted_option}
      </div>
      <div className={`{correct-answer-${ques_id}}`}>
        Correct Answer: {correct_option}
      </div>
    </div>
  );
};

export default AnsweredCard;
