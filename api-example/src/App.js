import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'


function App() {
  return (
    <Router>
      <Link to="/">Users</Link>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/users/:id">
          <User  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
