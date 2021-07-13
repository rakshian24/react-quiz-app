import React, { useState, useEffect } from "react";
import { QUIZ_TIME_LIMIT } from "../../../constant";
import { getCounterInTimeFormat } from "../../../helper/functions";
import useGetQuizQuestions from "../../../hooks/useGetQuizQuestions";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import ProgressBar from "../../ProgressBar/ProgressBar";
import QuestionAnswer from "../../QuestionAnswer/QuestionAnswer";
import QuizResultView from "../../QuizResultView/QuizResultView";
import "./Quiz.style.css";

const Quiz = (props) => {
  const quizId = props.match.params.id;
  const [quiz, errors, loading] = useGetQuizQuestions(quizId);
  const { name = "", questions = [] } = quiz;
  const [counter, setCounter] = useState(QUIZ_TIME_LIMIT);
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qaMapping, setQaMapping] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [quizPostBodyObj, setQuizPostBodyObj] = useState({})

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
        setProgress((prevProgress) => prevProgress + 1);
      }, 1000);
    if (counter === 0) {
      incrementQuestion();
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, progress]);

  useEffect(() => {
   if(Object.keys(quizPostBodyObj).length > 0){
    setShowResult(true);
   }
  }, [quizPostBodyObj])

  const resetProgress = () => {
    setProgress(0);
    setCounter(QUIZ_TIME_LIMIT);
  };

  const incrementQuestion = () => {
    if (questions.length > 0 && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestionNum) => prevQuestionNum + 1);
      resetProgress();
    } else {     
      console.log("QUIZ COMPLETED");
      console.log("Final mapping = ", qaMapping);
      setQuizPostBodyObj(prevPostBodyObj => ({
        ...prevPostBodyObj,
        quiz_id: quizId, 
        mappings: qaMapping
      }));      
      console.log("Post Body = ", quizPostBodyObj);
      
    }
  };

  const handleSelectedAnswer = (submitted_option, ques_id) => {
    setQaMapping([...qaMapping, { ques_id, submitted_option }]);
    incrementQuestion();
  };

  if (errors) {
    return <p>Error :(</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="quiz-wrapper">
      <Header title={name} />

      {!showResult ? (
        <div>
          <div className="time-bar-container">
            <ProgressBar progress={progress} />
            <div className="time-bar">
              Time Remaining: {getCounterInTimeFormat(counter)}/
              {getCounterInTimeFormat(QUIZ_TIME_LIMIT)}
            </div>
          </div>
          {questions.length > 0 ? (
            <QuestionAnswer
              question={questions[currentQuestion]}
              handleSelectedAnswer={handleSelectedAnswer}
            />
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <QuizResultView body={quizPostBodyObj} quizQuestions={questions}/>
      )}
    </div>
  );
};

export default Quiz;
