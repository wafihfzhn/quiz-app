import { useState } from "react";
import { questionBanks } from '../data/questionBanks';
import Result from "./result";

function Quiz() {
  const firstIndexQuestion = 0;
  const initialAnswers = [ null, null, null ];
  const totalQuestions = questionBanks.length;

  const [ userAnswers, setUserAnswers ] = useState(initialAnswers);
  const [ currentIndexQuestion, setCurrentIndexQuestion ] = useState(firstIndexQuestion);

  const currentQuestion = questionBanks[currentIndexQuestion];
  const isQuizFinished = currentIndexQuestion === totalQuestions

  function handleSelectOption(option) {
    const newUserAnswers = [ ...userAnswers ];
    newUserAnswers[currentIndexQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function prevQuestion() {
    setCurrentIndexQuestion(currentIndexQuestion - 1);
  }

  function nextQuestion() {
    setCurrentIndexQuestion(currentIndexQuestion + 1);
  }

  function restartQuiz() {
    setCurrentIndexQuestion(firstIndexQuestion);
    setUserAnswers(initialAnswers);
  }

  if (isQuizFinished ) {
    return (
      <Result
        totalQuestions={totalQuestions}
        questionBanks={questionBanks}
        userAnswers={userAnswers}
        restartQuiz={restartQuiz}
      />
    )
  } else {
    return (
      <div>
        <h3>Question {currentIndexQuestion + 1} / {totalQuestions}</h3>
        <p className="question">{currentQuestion.question}</p>

        {currentQuestion.options.map((option, index) =>
          <button
            className={"option" + (userAnswers[currentIndexQuestion] === option ? " selected" : "")}
            onClick={() => handleSelectOption(option)}
            key={index}
          >
            {option}
          </button>
        )}

        <div className="nav-buttons">
          <button onClick={prevQuestion} disabled={currentIndexQuestion === 0}> Previous </button>
          <button onClick={nextQuestion} disabled={!userAnswers[currentIndexQuestion]}>
            {currentIndexQuestion === (totalQuestions - 1) ? "Finish Quiz" : "Next"}
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
