import React, { useState } from 'react'

const Context = React.createContext({});

const GifContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifs, setGifs}}>
      {children}
    </Context.Provider>
  )
}


export default GifContextProvider;