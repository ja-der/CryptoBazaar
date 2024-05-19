import React from "react";
import ContentItem from "./ContentItem";

const ProviderContent = ({ tasks }) => {
  return (
    <div
      key={tasks.length}
      className="w-full flex flex-col items-center gap-y-3"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Services Provided
      </h2>
      <div className="w-6/12 bg-gray-100 rounded-lg">
        <div className="flex flex-col w-full gap-y-3 p-3">
          <div className="flex justify-between w-full">
            <span className="w-1/3 text-lg font-semibold text-gray-800">
              Service Needed
            </span>
            <span className="w-1/3 text-lg font-semibold text-gray-800">
              For
            </span>
            <span className="w-1/3 text-lg font-semibold text-gray-800">
              Pay
            </span>
          </div>
          {tasks.map((item, index) => (
            <ContentItem
              key={index}
              service={item.service}
              by={item.by}
              pay={item.pay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderContent;
