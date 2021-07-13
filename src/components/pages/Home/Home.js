import React from "react";
import QuizCard from "../../QuizCard/QuizCard";
import "./Home.style.css";
import useGetQuizzes from "../../../hooks/useGetQuizzes";
import Loader from "../../Loader/Loader";

const Home = () => {
  const [quizzes, errors, loading] = useGetQuizzes();

  if (errors) {
    return <p>Error :(</p>;
  }

  return (
    <div className="home-wrapper">
      <h1>Welcome to CodeJudge</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => <QuizCard quiz={quiz} key={quiz.id} />)
          ) : (
            <p>No Quiz Found</p>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
