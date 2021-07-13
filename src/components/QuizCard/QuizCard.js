import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.style.css";

const QuizCard = ({ quiz }) => {
  const { name, description, id } = quiz;
  return (
    <div className="quiz-card">
      <div className="quiz-card-title">
        <h3 className={`quiz-list-${id} quiz-title`}>{name}</h3>
        <div className={`start-quiz-${id} start-btn`}>
          <Link to={`/quiz/${id}`}>
            <button>Start</button>
          </Link>
        </div>
      </div>
      <hr />
      <p className="quiz-description">{description}</p>
    </div>
  );
};

export default QuizCard;
