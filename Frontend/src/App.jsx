import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCrud from "./pages/AddCrud";
import EditCrud from "./pages/EditCrud";
import Footer from "./components/Footer"
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCrud />} />
          <Route path="/edit/:id" element={<EditCrud />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;