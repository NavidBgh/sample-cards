import React from "react";
import "./button.scss";

export const Button = ({ title = "", color = "primary" }) => {
  return <div className={`button ${color}`}>{title}</div>;
};
