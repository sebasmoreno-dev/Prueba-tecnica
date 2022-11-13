import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./SectionQuestion.scss";
import CardQuestion from "./CardQuestion";

const SectionQuestion = () => {
  const [value2, setValue2] = useState("");
  return (
    <div>
      <div className="wrapper-content">
        <h2 className="title-questions">Questions</h2>
        <div>
          <div className="question">
            <div className="p-fluid grid">
              <div className="field col-12 md:col-4">
                <span className="p-float-label p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText
                    id="lefticon"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    className="input-text"
                  />
                  <label htmlFor="lefticon">Question Search</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardQuestion />
    </div>
  );
};

export default SectionQuestion;
