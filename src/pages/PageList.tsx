import React, { useState } from "react";
import List from "../component/List";
import AddList from "../component/AddList";
export interface isPeople {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const PageList: React.FC = () => {
  const [people, setPeople] = useState<isPeople["people"]>([
    {
      name: "fani",
      age: 20,
      url: "https://picsum.photos/200",
      note: "web Developer",
    },
  ]);

  return (
    <div>
      <div className="text-center mt-10 ">
        <h1>People invited to My Party</h1>
        <List people={people} />
        <AddList people={people} setPeople={setPeople} />
      </div>
    </div>
  );
};

export default PageList;
