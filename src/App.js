import React from "react";
import { Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/login-page/login-page.component";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
