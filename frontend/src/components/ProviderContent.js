import React from "react";
import { Paper, Typography } from "@mui/material";
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
  // Add more mock data as needed
];

const ProviderContent = () => {
  return (
    <Paper
      sx={{
        width: "50%",
        overflow: "auto",
        marginBottom: "1rem",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ width: "33%" }}>
            Service
          </Typography>
          <Typography variant="h6" sx={{ width: "33%" }}>
            By
          </Typography>
          <Typography variant="h6" sx={{ width: "33%" }}>
            Pay
          </Typography>
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
    </Paper>
  );
};

export default ProviderContent;
