import { Route, Routes } from "react-router-dom";
import GifCat from "./components/Gif/GifCat";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";
import BreakingBad from "./components/BreakingBad/BreakingBad";
import Question from "./components/Question/Question.jsx";
import NavBarRoutes from "./layout/NavBar";

const AppRouter = () => {
  return (
    <div className="App">
      <NavBarRoutes />
      <Routes>
        <Route path="gif" element={<GifCat />} />
        <Route path="breaking-bad" element={<BreakingBad />} />
        <Route path="cuestion" element={<Question />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
