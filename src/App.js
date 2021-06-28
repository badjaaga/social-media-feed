import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Typography} from "@material-ui/core";


function App() {
  return (
      <Router>
          <Navbar />
          <div className="App">
              <Switch>
                  <Route
                      exact
                      path="/"
                      render={() => (
                          <section>
                              <Typography variant='h5' align='center'>Welcome to the Redux Essentials example app!</Typography>
                          </section>
                      )}
                  />
                  <Redirect to="/" />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
