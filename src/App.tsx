import React from "react";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard/DashBoard";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Logout from "./components/Logout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/help">
            <div>ヘルプページ予定地</div>
          </Route>
          <Route path="/signout">
            <Logout />
          </Route>
          <Route path="*">
            <DashBoard />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
