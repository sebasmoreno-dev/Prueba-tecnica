import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./SectionQuestion.scss";
import { useFormik } from "formik";
import AddItem from "../AddItem/AddItem";
import CardItem from "../CardItem/CardItem";
import { BsPlusSquareFill } from "react-icons/bs";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const SectionQuestion = () => {
  let initialState = [
    {
      title: "Title 1",
      option: {
        name: "Multipe Option",
      },
      category: {
        name: "Category",
      },
      seeContent: "See content",
    },
  ];
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  console.log(value);
  const [questions, setQuestion] = useState(initialState);

  const handleFilterQuestion = (e) => {
    setValue(e.target.value)
    setQuestion(questions.filter(question => question.title === e.target.value))
  }
  
  const options = [{ name: "Frontend" }, { name: "Backend" }];

  const formik = useFormik({
    initialValues: {
      title: "",
      option: null,
      category: "",
      seeContent: "",
    },
    onSubmit: (data) => {
      console.log(data);
      initialState.push(data);
      setQuestion(initialState);

      formik.resetForm();
    },
  });

/* const addItem = ()  */

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
                    value={value}
                    onChange={handleFilterQuestion}
                    className="input-text"
                  />
                  <label htmlFor="lefticon">Question Search</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {questions.map((question) => {
        return (
          <CardItem
            key={question.title}
            title={question.title}
            option={question.option.name}
            category={question.category.name}
            seeContent={question.seeContent}
          />
        );
      })}

      <Button onClick={() => setActive(!active)}className="add-item border-dashed border-blue-500 w-12rem h-3rem m-2 font-bold flex ">
        <BsPlusSquareFill className="icon" />
        Add Item
      </Button>

      {active ? (
        <form onSubmit={formik.handleSubmit}>
          <label>Title</label>
          <InputText
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
            id="title"
          />

          <label>option</label>
          <Dropdown
            id="option"
            name="option"
            value={formik.values.option}
            onChange={formik.handleChange}
            options={options}
            optionLabel="name"
          />

          <label>category</label>
          <Dropdown
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            options={options}
            optionLabel="name"
          />

          <label></label>
          <InputText
            value={formik.values.seeContent}
            onChange={formik.handleChange}
            name="seeContent"
            id="seeContent"
          />

          <Button
            type="submit"
            className="add-item border-dashed border-blue-500 w-12rem h-3rem m-2 font-bold flex "
          >
            Confirmar
          </Button>
        </form>
      ) : null}
    </div>
  );
};

export default SectionQuestion;
