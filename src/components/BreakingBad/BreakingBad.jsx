import React, { useEffect, useState } from "react";
import GetImages from "./getImages";
import Quote from "./quote/Quote";
import { API_BREAKINGBAD_RANDOM } from "../../services/setting";

const BreakingBad = () => {
  const [quote, setQuote] = useState([]);
  const [image, setImage] = useState([]);

  const getImage = async (author) => {
    const url = `https://breakingbadapi.com/api/characters?name=${author}`;
    const res = await fetch(url);
    const [images] = await res.json();
    const { img } = images;
    setImage(img);
    console.log(img)
  };

  const updateQuote = async () => {
    const url = API_BREAKINGBAD_RANDOM;
    const res = await fetch(url);
    const [newQuote] = await res.json();

    const { quote: text, author } = newQuote;
    
    setQuote({
      text: text,
      author: author,
    });
    
    console.log(author)
    getImage(author)
  };

  useEffect(() => {
    getImage()
  }, []);

  return (
    <>
      <div>
        {/* <GetImages /> */}
        <img src={image} alt="" />
        <button onClick={updateQuote}>get Another</button>
        <Quote quote={quote} />
      </div>
    </>
  );
};

export default BreakingBad;
