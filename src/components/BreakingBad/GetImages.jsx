import React, { useState } from "react";

const GetImages = () => {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const url = `https://breakingbadapi.com/api/characters?name=${Walter}`;
    const res = await fetch(url);
    const [images] = await res.json();
    const { img } = images;
    setImage(img);
  };

  useEffect(() => {
    getImage();
  }, [third]);

  return <img src={image} />;
};

export default GetImages;
