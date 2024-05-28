import React from "react";

import { isPeople as isProps } from "../pages/PageList";

const List: React.FC<isProps> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="border-2 border-gray-800 flex  gap-5 justify-between items-center px-3 py-2">
          <div className="flex items-center">
            <img src={person.url} className="w-16 h-16 mr-2" alt="" />
            <h2>{person.name}</h2>
          </div>

          <p>{person.age}</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-center">i am list</div>
      <ul className="w-1/3">{renderPeople()}</ul>
    </div>
  );
};

export default List;
