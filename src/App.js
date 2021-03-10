import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/login-page/login-page.component";
import ProfilePage from "./pages/profile/profile.component";
import { currentUserSelector } from "./redux/user/user.selectors";

function App({ currentUser }) {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            currentUser ? <Redirect to="/profile" /> : <LoginPage />
          }
        />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state),
});

export default connect(mapStateToProps)(App);
