import { useEffect, useState } from "react";
import { API_CAT, API_KEYGIF, API_URLGIF } from "../../services/setting";
import { Image } from 'primereact/image';
import "./GifCat.scss";
import { Button } from "primereact/button";

//Fetch utilizando .then
const GifCat = () => {

  const [catFact, setCatFact] = useState("");
  const [gifCat, setGifCat] = useState("");

  //*Fetch con .then
  const callGif = (string) => {
    fetch(`${API_URLGIF}/gifs/search?q=${string}&api_key=${API_KEYGIF}`)
      .then((res) => res.json())
      .then((data) => {
        setGifCat(data.data[0].images.original.url);
      });
  };

  const callCat = () => {
    fetch(API_CAT)
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "Data");
        callGif(data?.fact?.split(" ").slice(0, 3).join(" "));
      });
  };

  useEffect(() => {
    callCat();
  }, []);

  return (
    <div className="wrapper-content-cat card">
      <div className="card-cat border-solid">
        <Image src={gifCat} alt="img" template="Preview Content"/>
        <h2 className="title-cat">{catFact}</h2>
      </div>
      <Button onClick={callCat}>Get a GIF of cats 😺</Button>
    </div>
  );
};

export default GifCat;
