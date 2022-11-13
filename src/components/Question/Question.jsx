import React from "react";
import { Dropdown } from "primereact/dropdown";
import "./Question.scss";
import Menu from "./Menu";
const Question = () => {
  return (
    <div className="wrapper-component">
      <div className="first-section">
        <h1>Question Pool</h1>
        <Dropdown
          className="p-dropdown p-component p-inputwrapper w-24rem dropdown"
          placeholder="Select"
        />
      </div>
      
      <div className="second-section">
        <div>
          <Menu />
        </div>
        <div>Questions</div>
      </div>

    </div>
  );
};

export default Question;
