import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListPartsComponent from "./components/ListPartsComponent";
import AddPartComponent from "./components/AddPartComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListClientComponent from "./components/ListClientComponent";
import AddClientComponent from "./components/AddClientComponent";
import SellPartComponent from "./components/SellPartComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListPartsComponent />} />
          <Route path="/parts" element={<ListPartsComponent />} />
          <Route path="/add-part" element={<AddPartComponent />} />
          <Route path="/add-part/:id" element={<AddPartComponent />} />
          <Route path="/clients" element={<ListClientComponent />} />
          <Route path="/add-client" element={<AddClientComponent />} />
          <Route path="/add-client/:id" element={<AddClientComponent />} />
          <Route path="/sell-part/:id" element={<SellPartComponent />} />
        </Routes>
      </div>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
}

export default App;
