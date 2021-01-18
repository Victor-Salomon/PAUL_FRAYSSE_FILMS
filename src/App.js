import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import RSociaux from "./Components/Sociaux";
import Films from "./Components/Films";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Films" component={Films} />
          <Route exact path="/Photographies" component={Home} />
          <Route exact path="/Experiments" component={Home} />
          <Route exact path="/About" component={Home} />
        </Switch>
      </Router>
      <RSociaux />
    </div>
  );
}

export default App;
