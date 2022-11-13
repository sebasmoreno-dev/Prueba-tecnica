import React from "react";
import "./CardItem.scss";
import { Button } from "primereact/button";




const CardItem = () => {
  return <div className="card-wrapper">
    <h3 className="title-card">Example question one</h3>
    <div>
      <Button className="btn-first">Multiple option</Button>
      <Button className="btn-second">Category</Button>
      <Button className="btn-third">See content</Button>
    </div>
  </div>;
};

export default CardItem;
