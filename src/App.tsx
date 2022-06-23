import React from "react";
import { BrowserRouter, BrowserRouter as Router, NavLink, Route, Switch,} from "react-router-dom";

import { Header } from "./component/header";
import { TopPage } from "./pages/TopPage";
import { Profile } from "./pages/Profile";
import { Works } from "./pages/Works";

function App()  {
  return (
    <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Works">
          <Works />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
};

export default App;