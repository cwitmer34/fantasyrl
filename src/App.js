import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Roster from "./Components/Roster";
import Navbar from "./Components/Navbar";
import Leaderboard from "./Components/Leaderboard";
import Scoring_System from "./Components/Scoring_System";
import Player_Stats from "./Components/Player_Stats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Leaderboard />} />
      <Route path="/stats" element={<Player_Stats />} />
      <Route path="/rosters" element={<Roster />} />
      <Route path="/scoring" element={<Scoring_System />} />
    </Routes>
  );
}

export default App;
