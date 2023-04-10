import React from 'react'
import Home from "./routes/Home";
import {BrowserRouter} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './component/navbar/Navbar';
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Home />
      </BrowserRouter> */}
      <Navbar/>
    </div>
  )
}

export default App