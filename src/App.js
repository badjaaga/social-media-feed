import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from "./components/Navbar";

import {PostsList} from "./components/PostsList";
import {AddPostForm} from "./components/AddPostForm/AddPostForm";
import {SinglePostPage} from "./components/SinglePostPage";


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
                          <React.Fragment>
                              <AddPostForm />
                              <PostsList/>
                          </React.Fragment>
                      )}
                  />
                  <Route exact path="/posts/:postId" component={SinglePostPage} />
                  <Redirect to="/" />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
