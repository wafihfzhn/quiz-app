import { useState } from "react";
import Result from "./result";

function Quiz() {
  const questionBanks = [
    {
      question: "What is the capital of France?",
      options: [ "Berlin", "London", "Paris", "Rome" ],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps",
      options: [ "Ruby", "Python", "Javascript", "All"  ],
      answer: "Paris",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "Javascript XML",
        "Java Syntax Extension",
        "Just a Simple Example",
        "None of the above",
      ],
      answer: "Javascript XML",
    },
  ]

  const [ userAnswers, setUserAnswers ] = useState([ null, null, null ]);
  const [ currentNumQuestion, setCurrentNumQuestion ] = useState(0);

  const currentQuestion = questionBanks[currentNumQuestion];
  const isQuizFinished = currentNumQuestion === questionBanks.length

  function handleSelectOption(option) {
    const newUserAnswers = [ ...userAnswers ];
    newUserAnswers[currentNumQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function prevQuestion() {
    setCurrentNumQuestion(currentNumQuestion - 1)
  }

  function nextQuestion() {
    setCurrentNumQuestion(currentNumQuestion + 1)
  }

  if (isQuizFinished ) {
    return <Result />
  } else {
    return (
      <div>
        <h3>Question {currentNumQuestion + 1}</h3>
        <p className="question">{currentQuestion.question}</p>

        {currentQuestion.options.map((option, index) =>
          <button
            className={"option" + (userAnswers[currentNumQuestion] === option ? " selected" : "")}
            onClick={() => handleSelectOption(option)}
            key={index}
          >
            {option}
          </button>
        )}

        <div className="nav-buttons">
          <button onClick={prevQuestion} disabled={currentNumQuestion === 0}> Previous </button>
          <button onClick={nextQuestion} disabled={!userAnswers[currentNumQuestion]}>
            {currentNumQuestion === (questionBanks.length - 1) ? "Finish Quiz" : "Next"}
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
