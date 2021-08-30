import "./App.css";
import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/question/:id" render={() => <Question />} />
        <Route path="/ending/:type" render={() => <Ending />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
