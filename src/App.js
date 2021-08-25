import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/question/:id" component={Question} />
        <Route path="/ending" component={Ending} />
      </Switch>
    </HashRouter>
  );
}

export default App;
