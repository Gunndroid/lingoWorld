import React from "react";
import { managers } from "../utils/managers2";
import Manager from "./Manager";

const ManagerList: React.FC = () => {
  const handleManagerClick = (name: string) => {
    console.log("Clicked on:", name);
  };

  return (
    <div className="flex flex-col gap-4 w-1/2 mx-auto">
      <h1 className="text-center text-3xl font-crimson-pro">Managers</h1>
      {managers.map((manager) => (
        <Manager
          key={manager.name}
          manager={manager}
          onClick={handleManagerClick}
        />
      ))}
    </div>
  );
};

export default ManagerList;
