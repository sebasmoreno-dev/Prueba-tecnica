import React from "react";
import { Dropdown } from "primereact/dropdown";
import "./Question.scss";
const Question = () => {
  return (
    <div className="wrapper-component">
      <h1>Question Pool</h1>
      <Dropdown
        className="p-dropdown p-component p-inputwrapper w-24rem"
        placeholder="Select"
      />
    </div>
  );
};

export default Question;
