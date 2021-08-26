import "./App.css";
import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  const [answer, setAnswer] = React.useState([]);
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/question/:id"
          render={() => <Question answer={answer} setAnswer={setAnswer} />}
        />
        <Route path="/ending" render={() => <Ending answer={answer} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
