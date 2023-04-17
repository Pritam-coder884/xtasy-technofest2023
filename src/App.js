import React, { useEffect } from "react";
import Home from "./routes/Home";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  addEventDataToFireStore,
} from "./utils/firbase/firebase.utils";
import { setCurrentUser } from "./features/user/userAction";
import { selectCurrentUser } from "./features/user/userSelector";

import EVENT_DATA from "./event-data";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  if (user) {
    console.log("You are signed in");
  }

  useEffect(() => {
    addEventDataToFireStore("events", EVENT_DATA);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log("User is subscribed");
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
