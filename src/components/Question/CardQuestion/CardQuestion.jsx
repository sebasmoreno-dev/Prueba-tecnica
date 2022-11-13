import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CardQuestion.scss";

const CardQuestion = () => {
  return (
    <div className="wrapper-columns">
      <div class="parent">
        <div class="div1"><CardItem /></div>
        <div class="div2"><CardItem /></div>
        <div class="div3"><CardItem /></div>
        <div class="div4"><CardItem /></div>
        <div class="div5"><CardItem /></div>
        <div class="div6"><CardItem /></div>
      </div>
    </div>
  );
};

export default CardQuestion;
