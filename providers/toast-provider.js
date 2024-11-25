"use client";

import { Toaster } from "react-hot-toast";

export default (
  <Toaster
    position="top-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: "",
      duration: 5000,
      style: {
        background: "#FEFAF6", // Primary color for the default background
        color: "#363636", // Darker text color for better readability
        border: "1px solid #DAC0A3", // Border to make the toaster stand out
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Add some shadow for better visibility
      },

      // Default options for specific types
      success: {
        duration: 3000,
        style: {
          background: "#10B981", // Success color for positive messages
          color: "#FEFAF6", // Light text color for contrast
        },
        theme: {
          primary: "#10B981",
          secondary: "#EADBC8",
        },
      },
      error: {
        duration: 5000,
        style: {
          background: "#C70026", // Error color for negative messages
          color: "#FEFAF6", // Light text color for contrast
        },
        theme: {
          primary: "#C70026",
          secondary: "#EADBC8",
        },
      },
    }}
  />
);
