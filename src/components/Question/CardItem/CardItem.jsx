import React from "react";
import "./CardItem.scss";
import { Button } from "primereact/button";


const CardItem = ({ title, option, category, seeContent }) => {

  return (
    <div className="card-wrapper">
      <h3 className="title-card">{title}</h3>
      <div className="btn-container">
        <Button className="btn-first">{option}</Button>
        <Button className="btn-second">{category}</Button>
        <div>
          <p>{seeContent}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
