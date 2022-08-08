import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  return (
    <Router>
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
    </Router>
  );
}

export default App;
