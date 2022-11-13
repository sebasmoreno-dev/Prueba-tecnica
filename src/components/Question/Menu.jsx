import React from "react";
import { TieredMenu } from "primereact/tieredmenu";

const Menu = () => {

  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    
  ];

  return (
    <div>
      <div className="card">
        <h2>Generator</h2>
        <TieredMenu model={items} />
      </div>
    </div>
  );
};

export default Menu;
