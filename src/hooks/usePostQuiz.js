import { useEffect,useState } from "react";
import axios from "axios";

const usePostQuiz = (postBody) => {
  const [quizResult, setQuizResult] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  async function postQuizResult() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/quiz-score`, JSON.stringify(postBody),
        {
          headers: {
            "auth-token": "19c4ff12-e027-4320-b844-2cda768714e8",
            "content-type": "application/json",
          },
        }
      );
      setQuizResult(response.data);
    } catch (e) {
      setErrors(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    postQuizResult();
  }, []);

  return [quizResult, errors, loading];
};

export default usePostQuiz;
