import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // persisting the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      } else {
        // User is signed out
        // ...
      }
    });
  });
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <SideBar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>

          {/* pop up the compose */}
          {sendMessageIsOpen && <SendMail />}
        </div>
      )} 
    </Router>
  );
}

export default App;
