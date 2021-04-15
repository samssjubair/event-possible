import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
