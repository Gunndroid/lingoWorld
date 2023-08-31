import React from "react";
// import { members } from "../utils/members";
import Member from "./Member";

type MemberType = {
  name: string;
  bio: string;
  imgUrl: string;
};

type MembersListProps = {
  members: MemberType[];
};

const MemberList: React.FC<MembersListProps> = ({ members }) => {
  const handleMemberClick = (name: string) => {
    console.log("Clicked on:", name);
  };

  return (
    <div className="flex flex-col gap-4 w-11/12  md:w-1/2 mx-auto">
      {/* <h1 className="text-center text-3xl font-crimson-pro">Members</h1> */}
      {members.map((member) => (
        <Member key={member.name} member={member} onClick={handleMemberClick} />
      ))}
    </div>
  );
};

export default MemberList;
