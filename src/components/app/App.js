import React from "react";
import CamerasContainer from "../cameras/index";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import './index.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path={"/"} element={<CamerasContainer/>} />
          <Route path={"/:Canon/:Nikon/:min/:max"} element={<CamerasContainer/>} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
