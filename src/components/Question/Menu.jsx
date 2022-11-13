import React from "react";
import { TieredMenu } from "primereact/tieredmenu";
import "./Menu.scss";
import { AiOutlineApartment } from "react-icons/ai";
import { IoAppsOutline, IoEllipsisHorizontalSharp, IoTimerOutline, IoTodayOutline} from "react-icons/io5"
import { MdChecklistRtl, MdOutlineFilter1 } from "react-icons/md";
import { TiThLargeOutline } from "react-icons/ti";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { GoTextSize } from "react-icons/go";
import { FaAmilia } from "react-icons/fa";

const Menu = () => {

  const items = [
    {
      label: "Text",
      icon:  () => <GoTextSize className="icon"/>,
    },
    {
      label: "Text area",
      icon: () => <FaAmilia className="icon"/> ,
    },
    {
      label: "Number",
      icon: () => <MdOutlineFilter1 className="icon"/>,
    },
    {
      label: "Date",
      icon: () => <IoTodayOutline className="icon"/>,
    },
    {
      label: "Hour",
      icon: () => <IoTimerOutline className="icon"/>,
    },
    {
      label: "Multiple option",
      icon: () => <MdChecklistRtl className="icon"/>,
    },
    {
      label: "Single option",
      icon: () => <AiOutlineApartment className="icon"/>,
    },
    {
      label: "Single option scale option",
      icon: () => <IoEllipsisHorizontalSharp className="icon"/>,
    },
    {
      label: "Dropdowns",
      icon: () => <TfiBookmarkAlt className="icon"/>,
    },
    {
      label: "Single option grid",
      icon: () => <TiThLargeOutline className="icon"/>,
    },
    {
      label: "Multiple choice grid",
      icon: () => <IoAppsOutline className="icon"/>,
      
    },
    
  ];

  return (
    <div>
      <div className="card">
        <h2 className="title-generator">Generator</h2>
        <TieredMenu model={items} className="menu-question"/>
      </div>
    </div>
  );
};

export default Menu;
