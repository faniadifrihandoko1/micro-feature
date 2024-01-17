import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SalaryCount from "./component/SalaryCount";
import WordScramble from "./component/WordScramble";
import MobileLegend from "./component/MobileLegend";
import PageError from "./component/PageError";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salary-count" element={<SalaryCount />} />
      <Route path="/word-scramb" element={<WordScramble />} />
      <Route path="/mobile-legend" element={<MobileLegend />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}

export default App;
