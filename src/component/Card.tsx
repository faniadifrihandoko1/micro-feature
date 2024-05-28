import React from "react";

interface card {
  title: string;
  description: string;
  author: string;
}

const Card: React.FC<card> = (props) => {
  return (
    <div>
      <div className=" text-center p-3 border-2 border-black w-full">
        <h1>{props.title}</h1>
        <p className="my-3">{props.description}</p>
        <p>{props.author}</p>
      </div>
    </div>
  );
};

export default Card;
