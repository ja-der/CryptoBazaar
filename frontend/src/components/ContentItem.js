import React from "react";
import { Button } from "@mui/material";

const ContentItem = ({ service, by, pay }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <span style={{ flexBasis: "33%" }}>{service}</span>
        <span style={{ flexBasis: "33%" }}>{by}</span>
        <span style={{ flexBasis: "33%" }}>{pay}</span>
      </div>
      <Button
        variant="contained"
        sx={{ bgcolor: "#4CAF50", "&:hover": { bgcolor: "#388E3C" } }}
      >
        Book service
      </Button>
    </div>
  );
};

export default ContentItem;
