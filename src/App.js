import React, { useEffect } from "react";
import Home from "./routes/Home";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
const App = () => {
 
  return (

    <>
      <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
