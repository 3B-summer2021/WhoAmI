import "./App.css";
import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
import { useState } from "react";
function App() {
  const [type, setType] = useState(0);
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/"
          render={() => <Home type={type} setType={setType} />}
          exact
        />
        <Route
          path="/question/:type/:id"
          render={() => <Question type={type} />}
        />
        <Route path="/ending/:type" render={() => <Ending />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
