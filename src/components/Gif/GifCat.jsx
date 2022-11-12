import { useEffect, useState } from "react";
import { API_CAT, API_KEYGIF, API_URLGIF } from "../../services/setting";


//Fetch utilizando .then
const GifCat = () => {

  const [catFact, setCatFact] = useState("");
  const [gifCat, setGifCat] = useState("");

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
    <>
      <h1>{catFact}</h1>
      <img src={gifCat} />
    </>
  );
};

export default GifCat;
