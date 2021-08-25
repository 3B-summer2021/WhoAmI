import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/question/:id" exact render={() => <Question />} />
        <Route path="/ending" exact render={() => <Ending />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
