// root/components/Proposal.tsx
import React from "react";

interface ProposalProps {
  proposal: {
    name: string;
    proposal: string;
    imgUrl: string;
  };
  onClick: (name: string) => void;
}

const Proposal: React.FC<ProposalProps> = ({ proposal, onClick }) => {
  return (
    <div
      onClick={() => onClick(proposal.name)}
      className="p-4 flex gap-4 sm:space-x-6 rounded-lg border border-gray-400 bg-gray-50 hover:cursor-pointer items-center"
    >
      <div className="flex-shrink-0 w-16 md:w-1/8 m-2">
        <img
          src={proposal.imgUrl}
          alt={`${proposal.name}'s Avatar`}
          className="object-cover object-center w-full rounded-full dark:bg-gray-500 shadow-sm shadow-black"
        />
        <h2 className="text-md pb-2 text-center">{proposal.name}</h2>
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <div className="flex flex-col">
          <span className="text-black text-xl ">{proposal.proposal}</span>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
