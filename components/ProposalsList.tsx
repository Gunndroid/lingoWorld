// root/components/ProposalsList.tsx
import React from "react";
import Proposal from "../components/Proposals";

type ProposalType = {
  name: string;
  proposal: string;
  imgUrl: string;
};

type ProposalsListProps = {
  proposals: ProposalType[];
};

const ProposalsList: React.FC<ProposalsListProps> = ({ proposals }) => {
  const handleProposalClick = (name: string) => {
    console.log("Clicked on:", name);
  };

  return (
    <div className="flex flex-col gap-4 w-11/12  md:w-1/2 mx-auto">
      {proposals.map((proposal) => (
        <Proposal
          key={proposal.name}
          proposal={proposal}
          onClick={handleProposalClick}
        />
      ))}
    </div>
  );
};

export default ProposalsList;
