import React, { useEffect } from "react";
import Home from "./routes/Home";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  addEventDataToFireStore,
  getEventDetailsFormFireStore,
} from "./utils/firbase/firebase.utils";
import { setCurrentUser } from "./features/user/userAction";
import { selectCurrentUser } from "./features/user/userSelector";
import { fetchEvents } from "./features/events/eventSlice";

import EVENT_DATA from "./event-data";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    // addEventDataToFireStore("events", EVENT_DATA);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    dispatch(fetchEvents());

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
