import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            About us
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
