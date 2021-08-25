import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/WhoAmI/" exact component={Home} />
        <Route path="/WhoAmI/question/:id" exact component={Question} />
        <Route path="/WhoAmI/ending" exact component={Ending} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
