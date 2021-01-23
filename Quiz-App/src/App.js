import React, { useState } from "react";
import questions from "./questions";

export default function App() {
  {
    questions;
  }
  let cd = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(cd);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const UpdateTime = () => {
    cd = new Date().toLocaleTimeString();
    setCtime(cd);
  };

  setInterval(UpdateTime, 1000);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length};
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questions[currentQuestion].key}</span>/
              {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
              <p>Correct Answers till now {score}</p>
              <p>Time: {ctime}</p>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
