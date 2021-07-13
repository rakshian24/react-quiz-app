import { useEffect,useState } from "react";
import axios from "axios";

const useGetQuizQuestions = (quizId) => {
  const [quiz, setQuiz] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getQuizQuestions() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz-questions/all/${quizId}`,
        {
          headers: {
            "auth-token": "19c4ff12-e027-4320-b844-2cda768714e8",
            "content-type": "application/json",
          },
        }
      );
      setQuiz(response.data);
    } catch (e) {
      setErrors(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getQuizQuestions();
  }, []);

  return [quiz, errors, loading];
};

export default useGetQuizQuestions;
