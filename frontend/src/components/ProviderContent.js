import React from "react";
import ContentItem from "./ContentItem";

const mock = [
  {
    service: "Service 1",
    by: "Provider 1",
    pay: "100",
  },
  {
    service: "Service 2",
    by: "Provider 2",
    pay: "200",
  },
  {
    service: "Service 3",
    by: "Provider 3",
    pay: "300",
  },
  {
    service: "Service 1",
    by: "Provider 1",
    pay: "100",
  },
  {
    service: "Service 2",
    by: "Provider 2",
    pay: "200",
  },
  {
    service: "Service 3",
    by: "Provider 3",
    pay: "300",
  },
  {
    service: "Service 1",
    by: "Provider 1",
    pay: "100",
  },
  {
    service: "Service 2",
    by: "Provider 2",
    pay: "200",
  },
  {
    service: "Service 3",
    by: "Provider 3",
    pay: "300",
  },
  {
    service: "Service 1",
    by: "Provider 1",
    pay: "100",
  },
];

const ProviderContent = () => {
  return (
    <div className="w-6/12 overflow-auto mb-5 p-3 bg-orange-200 rounded-lg">
      <div className="flex flex-col w-full gap-y-3">
        <div className="flex justify-between w-7/12">
          <span className="basis-1/3 text-lg font-semibold">Service</span>
          <span className="basis-1/3 text-lg font-semibold">By</span>
          <span className="basis-1/3 text-lg font-semibold">Pay</span>
        </div>
        {mock.map((item, index) => (
          <ContentItem
            key={index}
            service={item.service}
            by={item.by}
            pay={item.pay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderContent;
