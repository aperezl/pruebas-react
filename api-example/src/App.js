import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom'
import Users from './components/Users'


function App() {
  return (
    <Router>
      <Link to="/">Users</Link>
      <Switch>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
