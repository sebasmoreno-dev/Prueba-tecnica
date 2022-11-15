import { Button } from "primereact/button";
import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CardQuestion.scss";

const CardQuestion = () => {
  
  const cardItem = new Array([6]);

  /* title: "Example question one",
    optionM: "Multiple option",
    category: "Category",
    seeContent: "" */
    

  return (
    <div className="wrapper-columns">
      <div className="parent">
        {cardItem.map((card) => {
          <div className="card-wrapper">
            <h3 className="title-card">{card.title}</h3>
            <div className="btn-container">
              <Button className="btn-first">{card.optionM}</Button>
              <Button className="btn-second">{card.category}</Button>
              <div>
                <p>See content</p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default CardQuestion;
