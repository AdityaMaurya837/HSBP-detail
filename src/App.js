import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Detailpage from "./Components/Detailpage/Detailpage";
import Contact from "./Components/Contact/ContactUs";
import BeautyPackage from "./Components/BeautyPackage/BeautyPackage";
import BeautyScervices from "./Components/BeautyScervices/BeautyScervices";
import BridalPackage from "./Components/BridalPackage/BridalPackage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Detailpage />
        <Routes>
            <Route exact path="/"  element={ <BridalPackage/>}/>
            <Route path="/beauty-scervices" element = {<BeautyScervices/>}/>
            <Route path="/beautyp-package" element={<BeautyPackage/>}/>
          </Routes>
      </div>
      <Contact />
    </Router>
  );
};

export default App;
