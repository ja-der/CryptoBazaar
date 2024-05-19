import React from "react";

const ContentItem = ({ service, by, pay }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between w-7/12">
        <span className="basis-1/3">{service}</span>
        <span className="basis-1/3">{by}</span>
        <span className="basis-1/3">{pay}</span>
      </div>
      <button className="bg-green-300 hover:bg-green-500 text-black py-1 px-2 rounded">
        Book service
      </button>
    </div>
  );
};

export default ContentItem;
