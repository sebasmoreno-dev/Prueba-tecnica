import React from "react";
import { Dropdown } from "primereact/dropdown";
import "./Question.scss";
import Menu from "./Menu/Menu.jsx";
import SectionQuestion from "./SectionQuestion/SectionQuestion.jsx";

const Question = () => {
  return (
    <div className="wrapper-component-question">
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
        <div>
          <SectionQuestion />
        </div>
      </div>
    </div>
  );
};

export default Question;
