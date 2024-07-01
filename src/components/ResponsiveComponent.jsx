"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  console.log("ResponsiveComponent size:", size);
  console.log("ResponsiveComponent children:", children);

  if (typeof children !== 'function') {
    console.error("Error: children is not a function");
    return null;
  }

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;