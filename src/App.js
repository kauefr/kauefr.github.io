import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact><div><Navbar /><Link to='/hi'>Go to Hi</Link></div></Route>
        <Route path='/hi'><div>Hi</div></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
