import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SalaryCount from "./component/SalaryCount";
import WordScramble from "./component/WordScramble";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salary-count" element={<SalaryCount />} />
      <Route path="/word-scramb" element={<WordScramble />} />
    </Routes>
  );
}

export default App;
