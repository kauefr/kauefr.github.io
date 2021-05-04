import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css'
import Dashboard from "./dashboard/Dashboard";
import Tjsp from "./tjsp/Tjsp";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/tjsp' component={Tjsp} />
      </Switch>
    </HashRouter>
  );
}

export default App;
