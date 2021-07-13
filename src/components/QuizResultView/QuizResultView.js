import React from "react";
import usePostQuiz from "../../hooks/usePostQuiz";
import "./QuizResultView.style.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnsweredCard from "../AnsweredCard/AnsweredCard";
import Loader from "../Loader/Loader";

const QuizResultView = ({ body, quizQuestions }) => {
//   console.log("body in QUizResult = ", body);
  const [quizResult, errors, loading] = usePostQuiz(body);
//   console.log("quizResult = ", quizResult);
  const { score, questions } = quizResult;
  if (errors) {
    return <p>Error :(</p>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="result-view-wrapper">
      <h1 className="score">Your score is: {score}</h1>
      <QuestionCard title="Answers" />
      {questions.map((question) => {
        let questionString = quizQuestions.filter((q) => q.id === question.ques_id);
        return (
          <AnsweredCard
            questionString={questionString[0].name}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default QuizResultView;
