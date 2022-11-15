import React from 'react'
import "./AddItem.scss";
import { BsPlusSquareFill } from "react-icons/bs";
const AddItem = () => {
  return (
    <div>
      <div className="add-item border-dashed border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">
        <BsPlusSquareFill className='icon'/>
        Add Item
      </div>
    </div>
  )
}

export default AddItem;