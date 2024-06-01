import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Game from "./pages/Game.tsx";
import NotFound from "./pages/NotFound.tsx";
import Matchmaking from "./pages/Matchmaking.tsx";
import "./styles/styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/game" element={<Game></Game>}></Route>
      <Route path="/matchmaking" element={<Matchmaking></Matchmaking>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
