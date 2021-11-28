import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css'
import Dashboard from "./dashboard/Dashboard";
import Test from "./Test";
import Tjsp from "./tjsp/Tjsp";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/tjsp' component={Tjsp} />
        <Route path='/test' component={Test} />
        <Route path='/' component={Dashboard} />
      </Switch>
    </HashRouter>
  );
}

export default App;
