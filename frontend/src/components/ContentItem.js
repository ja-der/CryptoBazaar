import React from "react";
import { Button } from "@mui/material";

const ContentItem = ({ service, by, pay }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="w-1/3">{service}</span>
      <span className="w-1/3">{by}</span>
      <span className="w-1/6">{pay}</span> {/* Adjusted width to 1/5 */}
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
