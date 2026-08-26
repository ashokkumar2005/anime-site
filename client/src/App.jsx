import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:animeId" element={<AnimeDetails />} />
        </Routes>
      </main>
    </>
  );
}
