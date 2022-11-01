import React from "react";
const Loading = ({ isLoading, children }) => {
  return isLoading ? <p>Loading...</p> : children;
};

export default Loading;
