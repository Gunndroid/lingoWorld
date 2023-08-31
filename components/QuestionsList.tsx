// root/components/QuestionsList.tsx
import React from "react";
import Question from "./Question";

type QuestionType = {
  name: string;
  question: string;
  imgUrl: string;
};

type QuestionsListProps = {
  questions: QuestionType[];
};

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  const handleQuestionClick = (name: string) => {
    console.log("Clicked on:", name);
  };

  return (
    <div className="flex flex-col gap-4 w-11/12  md:w-1/2 mx-auto">
      {questions.map((question) => (
        <Question
          key={question.name}
          question={question}
          onClick={handleQuestionClick}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
