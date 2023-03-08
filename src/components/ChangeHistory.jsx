import '../styles/Footer.css';
import React from 'react';
import { PrintHistory } from "./PrintHistory";
import { BtnHistory  } from "./BtnHistory ";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ChangeHistory= () => {
  return (
      <footer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BtnHistory  />} />
              <Route path="/historial" element={<PrintHistory />} />
            </Routes>
          </BrowserRouter>
      </footer>
  );
  
}
export default ChangeHistory;

