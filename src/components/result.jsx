function Result(props) {
  function getScore() {
    let finalScore = 0;

    props.userAnswers.forEach((userAnswer, index) => {
      if (props.questionBanks[index].answer === userAnswer) {
        finalScore++;
      }
    });

    return finalScore;
  }

  const userScore = getScore();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {userScore}/{props.totalQuestions}</p>

      <button className="restart-button" onClick={props.restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result
