import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link> | 
        <Link to="/about">About us</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
