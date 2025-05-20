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

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBanks[0].question}</p>
    </div>
  );
}

export default Quiz;
