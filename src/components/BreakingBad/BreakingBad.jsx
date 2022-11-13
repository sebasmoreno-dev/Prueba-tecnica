import React, { useEffect, useState } from "react";
import Quote from "./quote/Quote";
import { API_BREAKINGBAD_RANDOM } from "../../services/setting";
import { Button } from 'primereact/button';
import "./BreakingBad.scss";
import noImage from "./../../assets/no-imagen.jpg";

const BreakingBad = () => {
  const [quote, setQuote] = useState([]);
  const [image, setImage] = useState([]);

  //*Fetch con async - await
  const getImage = async (author) => {
    try {
      const url = `https://breakingbadapi.com/api/characters?name=${author}`;
      const res = await fetch(url);
      const [images] = await res.json();
      const img = images ? images.img : noImage;
      setImage(img);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuote = async () => {
    try {
      const url = API_BREAKINGBAD_RANDOM;
      const res = await fetch(url);
      const [newQuote] = await res.json();

      const { quote: text, author } = newQuote;

      setQuote({
        text: text,
        author: author,
      });
      getImage(author);
    } catch (error) {
      console.log(error, "No se encontro la imagen");
    }
  };

  useEffect(() => {
    updateQuote()
  }, []);

  return (
    <>
      <div className="wrapper-content-bad">
        <div className="card-bad border-solid">
          <img src={image} alt={quote.author} />
          <Quote quote={quote} />
        </div>
        <Button onClick={updateQuote} className="btn-quote">Get a Quote</Button>
      </div>
    </>
  );
};

export default BreakingBad;
