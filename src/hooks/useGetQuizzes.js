import { useEffect,useState } from "react";
import axios from "axios";

const useGetQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getQuizzes() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/all`,
        {
          headers: {
            "auth-token": "19c4ff12-e027-4320-b844-2cda768714e8",
            "content-type": "application/json",
          },
        }
      );
      setQuizzes(response.data);
    } catch (e) {
      setErrors(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getQuizzes();
  }, []);

  return [quizzes, errors, loading];
};

export default useGetQuizzes;
