import React from "react";
import Card from "./Card";

const data = [
  {
    title: "Tic Tac Toe",
    desc: "game",
    author: "fani",
  },
  {
    title: "Snake Game",
    desc: "game",
    author: "fazri",
  },
  {
    title: "Mobile Legends",
    desc: "game",
    author: "fani",
  },
  {
    title: "Cheese Game",
    desc: "game",
    author: "fathur",
  },
  {
    title: "Matching Card",
    desc: "game",
    author: "fani",
  },
];
const Cards: React.FC = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-center my-auto mt-36">
        {data.map((item, index) => {
          console.log(item, index);
          return (
            <Card
              key={index}
              title={item.title}
              description={item.desc}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
