// root/components/Question.tsx
import React from "react";

interface QuestionProps {
  question: {
    name: string;
    question: string;
    imgUrl: string;
  };
  onClick: (name: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onClick }) => {
  return (
    <div
      onClick={() => onClick(question.name)}
      className="p-3 flex gap-4 sm:space-x-6 rounded-lg border border-gray-400 bg-gray-50 hover:cursor-pointer items-center"
    >
      <div className="flex-shrink-0 w-16 md:w-1/8">
        <img
          src={question.imgUrl}
          alt={`${question.name}'s Avatar`}
          className="object-cover object-center w-full rounded-full dark:bg-gray-500 shadow-sm shadow-black"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">{question.name}</h2>
          <span className="text-black ">{question.question}</span>
        </div>
      </div>
    </div>
  );
};

export default Question;
