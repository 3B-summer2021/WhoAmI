import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  return (
    <BrowserRouter>
      <Route path="/WhoAmI/" component={Home} exact />
      <Route path="/WhoAmI/question/:id" component={Question} />
      <Route path="/WhoAmI/ending" component={Ending} />
    </BrowserRouter>
  );
}

export default App;
