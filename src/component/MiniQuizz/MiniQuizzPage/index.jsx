import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./miniquizz.css";

//Initiating the List of Question
const MiniQuizz = () => {
  const questionList = [
    {
      question: "How many planets are there in the Solar System?",
      answerList: [
        { answer: "Seven", isCorrect: false },
        { answer: "Eight", isCorrect: true },
        { answer: "Nine", isCorrect: false },
        { answer: "Ten", isCorrect: false },
      ],
    },

    {
      question:
        "Which is the brightest and hottest planet in the Solar System?",
      answerList: [
        { answer: "Venus", isCorrect: true },
        { answer: "Earth", isCorrect: false },
        { answer: "Neptune", isCorrect: false },
        { answer: "Mars", isCorrect: false },
      ],
    },

    {
      question: "Which of the following statement is correct about the Earth?",
      answerList: [
        { answer: "Earth is also known as 'Blue Planet'.", isCorrect: false },
        { answer: "It has only natural satellite.", isCorrect: false },
        {
          answer:
            "It is the third nearest planet to the sun, and the fifth largest planet in the Solar System.",
          isCorrect: false,
        },
        { answer: "All of the above.", isCorrect: true },
      ],
    },

    {
      question: "If there is no Sun, the colour of the sky would be:",
      answerList: [
        { answer: "blue", isCorrect: false },
        { answer: "yellow", isCorrect: false },
        { answer: "black", isCorrect: true },
        { answer: "red", isCorrect: false },
      ],
    },

    {
      question: "The planet with the maximum number of moons?",
      answerList: [
        { answer: "Venus", isCorrect: false },
        { answer: "Neptune", isCorrect: false },
        { answer: "Uranus", isCorrect: false },
        { answer: "Saturn", isCorrect: true },
      ],
    },
  ];

  // properties
  const [currentIndexQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const currentQuestion = questionList[currentIndexQuestion];
  const nextQuestion = currentIndexQuestion + 1;

  //method to restart the quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setResult(false);
  };

  // method to set the score
  const handleAnswerItemClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setResult(true);
    }
  };

  return (
    <div className="miniquizzContainer">
      <h1 className="header"> Planet Quiz </h1>
      {result ? (
        <div className="resultBox">
          You've scored {score} out of {questionList.length} !
          <button className="restartButton" onClick={() => restartQuiz()}>
            {" "}
            Let's diskover again!{" "}
          </button>
        </div>
      ) : (
        <div className="QnA">
          <div className="questionBox">
            <div className="questionIndex">
              <span>Question {currentIndexQuestion + 1}</span>
            </div>
            <div className="question">{currentQuestion.question}</div>
          </div>
          <div className="answerBox">
            {currentQuestion.answerList.map((answerItem) => (
              <button
                key={answerItem.answer}
                className="button"
                onClick={() => handleAnswerItemClick(answerItem.isCorrect)}
              >
                {answerItem.answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniQuizz;
