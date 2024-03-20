import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import MyNavbar from "./components/MyNavbar";
import FormCreateProprietario from "./components/Proprietario/Create/FormCreateProprietario";
import FormCreateAnimale from "./components/Animale/Create/FormCreateAnimale";
import { ElencoAnimali } from "./components/Animale/Index/ElencoAnimali";
import EditAnimale from "./components/Animale/Edit/EditAnimale";
import Proprietario from "./components/Proprietario/Proprietario";
import DetailProprietario from "./components/Proprietario/Details/DetailProprietario";
import EditProprietario from "./components/Proprietario/Edit/EditProprietario";
import ElencoVisite from "./components/Visite/Index/ElencoVisite";
import Home from "./components/Home/Home";
import FormCreateVisite from "./components/Visite/Create/FormCreateVisite";
import EditVisite from "./components/Visite/Edit/EditVisite";
import { ElencoRicoveri } from "./components/Ricovero/Index/ElencoRicoveri";
import FormCreateRicovero from "./components/Ricovero/Create/FormCreateRicovero";
import EditRicovero from "./components/Ricovero/Edit/EditRicovero";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <LoginForm />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Proprietario/Create"
          element={
            <>
              <FormCreateProprietario />
            </>
          }
        />
        <Route
          path="/Proprietario"
          element={
            <>
              <Proprietario />
            </>
          }
        />
        <Route path="/Proprietario/Details/:id" element={<DetailProprietario />} />
        <Route path="/Proprietario/Edit/:id" element={<EditProprietario />} />
        <Route
          path="/Animale/Create"
          element={
            <>
              <FormCreateAnimale />
            </>
          }
        />
        <Route
          path="/Animale/Index"
          element={
            <>
              <ElencoAnimali />
            </>
          }
        />
        <Route path="/Animale/Edit/:AnimaleId" element={<EditAnimale />} />
        <Route path="/Visite/Index/" element={<ElencoVisite />} />
        <Route path="/Visite/Create/" element={<FormCreateVisite />} />
        <Route path="/Visita/Edit/:id" element={<EditVisite />} />
        <Route path="/Ricovero/Index/" element={<ElencoRicoveri />} />
        <Route path="/Ricovero/Create/" element={<FormCreateRicovero />} />
        <Route path="/Ricovero/Edit/:id" element={<EditRicovero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
