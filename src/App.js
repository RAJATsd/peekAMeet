import React from "react";
import { Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/login-page/login-page.component";
import ProfilePage from "./pages/profile/profile.component";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
