import React from 'react'
import {  useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const FloatButton = () => {
  const navigate = useNavigate();
  return (
    <Box
        sx={{
          position: "absolute",
          bottom: "48px",
          right: "16px",
          width: "60px",
          height: "60px",
          border: "2px solid black",
          borderRadius: "100%",
          cursor: "pointer",
          filter: "opacity(0.6)",
          "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
            width: "4px",
            height: "36px",
            backgroundColor: " black",
          },
          "&::before": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "4px",
            height: "36px",
            backgroundColor: " black",
          },
          "&:hover": {
            filter: "opacity(1)",
          },
        }}
        onClick={() => navigate("/detail")}
      ></Box>
  )
}

export default FloatButton