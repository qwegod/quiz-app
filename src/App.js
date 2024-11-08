import { useEffect, useState } from "react";
import Splash from "./components/splash/splash";
import Start from "./components/start/start";
import Quiz from "./components/quiz/quiz";
import Finish from "./components/finish/finish";

function App() {
  const [isLoading, setLoad] = useState(true);
  const [isQuizNotStarted, setQuiz] = useState(true);
  const [completed, setComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoad(false), 2000);
  });

  if (completed) {
    return (
      <Finish setComplete={setComplete} setLoad={setLoad} setQuiz={setQuiz} />
    );
  }

  return (
    <div className="App">
      {isLoading ? (
        <Splash />
      ) : isQuizNotStarted ? (
        <Start setQuiz={setQuiz} />
      ) : (
        <Quiz setComplete={setComplete} />
      )}
    </div>
  );
}

export default App;
