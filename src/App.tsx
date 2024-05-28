import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SalaryCount from "./component/SalaryCount";
import WordScramble from "./component/WordScramble";
import MobileLegend from "./component/MobileLegend";
import PageError from "./component/PageError";
import Convert from "./component/Convert";
import CountdownTime from "./component/CountdownTime";
import Cards from "./component/Cards";
import PageList from "./pages/PageList";
import TicTacToe from "./component/TicTacToe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salary-count" element={<SalaryCount />} />
      <Route path="/word-scramb" element={<WordScramble />} />
      <Route path="/mobile-legend" element={<MobileLegend />} />
      <Route path="/convert" element={<Convert />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="/countdown-time" element={<CountdownTime />} />
      <Route path="*" element={<PageError />} />
      <Route path="/test" element={<Cards />} />
      <Route path="/list" element={<PageList />} />
    </Routes>
  );
}

export default App;
