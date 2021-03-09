import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu'

function App() {
  return (
    <>
      
      
      <Router>
        <Menu />
        <div className="flex-col md:flex-row justify-between  flex gap-4 items-start mx-4 py-12">  
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
