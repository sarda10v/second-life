import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pets from "./pages/Pets/Pets";
import AnimalShelters from "./pages/AnimalSheltersjsx/AnimalShelters";
import PetControll from "./pages/PetControll/PetControll";
import PetGiveAway from "./pages/PetGiveAway.jsx/PetGiveAway";
import ShelterPage from "./pages/ShelterPage/ShelterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/pet-control-form" element={<PetControll />} />
        <Route path="/pet-give-away-form" element={<PetGiveAway />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/shelter-page" element={<ShelterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
