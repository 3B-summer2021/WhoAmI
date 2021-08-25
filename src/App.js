import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Home} exact />
      <Route path="/question/:id" component={Question} />
      <Route path="/ending" component={Ending} />
    </BrowserRouter>
  );
}

export default App;
