import React, { useEffect } from "react";
import Home from "./routes/Home";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
