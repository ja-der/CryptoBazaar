import React from "react";
import ContentItemAccepted from "./ContentItemAccepted";

const AcceptedServicesContent = ({ acceptedTasks, completeTask }) => {
  return (
    <>
      {acceptedTasks.length > 0 && (
        <div
          key={acceptedTasks.length}
          className="w-full flex flex-col items-center gap-y-3 mt-3"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            My Service Postings
          </h2>
          <div className="w-6/12 bg-gray-100 rounded-lg">
            <div className="flex flex-col w-full gap-y-3 p-3">
              <div className="flex justify-between w-full">
                <span className="w-1/3 text-lg font-semibold text-gray-800">
                  Service Needed
                </span>
                <span className="w-1/3 text-lg font-semibold text-gray-800">
                  Accepted By
                </span>
                <span className="w-1/3 text-lg font-semibold text-gray-800">
                  Pay
                </span>
              </div>
              {acceptedTasks.map((item, index) => (
                <ContentItemAccepted
                  key={index}
                  service={item.service}
                  by={item.acceptedBy}
                  pay={item.pay}
                  completeTask={completeTask}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcceptedServicesContent;
