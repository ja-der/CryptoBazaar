import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

const ContentItemAccepted = ({ service, by, pay, completeTask }) => {
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#388E3C",
    },
    color: "black",
    padding: "8px 16px",
    borderRadius: "4px",
  };

  return (
    <>
      <div className="flex items-center justify-between w-full mt-2 mb-2">
        <span className="w-1/3">{service}</span>
        <span className="w-1/3">{by}</span>
        <span className="w-1/9">{pay}</span>

        <div className="w-1/4 flex justify-center items-center ml-4">
          <Button
            variant="contained"
            style={buttonStyle}
            onClick={() => completeTask(service, by)}
            className="h-15"
          >
            Confirm Completion
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContentItemAccepted;
