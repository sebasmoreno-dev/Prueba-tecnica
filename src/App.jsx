import { Route, Routes } from "react-router-dom";
import GifCat from "./components/Gif/GifCat";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";
import BreakingBad from "./components/BreakingBad/BreakingBad";

const App = () => {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<GifCat />}/>
          <Route path="/breaking-bad" element={<BreakingBad />}/>
        </Routes>
      </div>
  )
};

export default App;
