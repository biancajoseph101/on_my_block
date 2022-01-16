import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import CrimeTip from './pages/CrimeTip'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path='/recommendations' component={Recommendations} />
          <Route exact path='/crimes' component={CrimeTip} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/' component={Login} />  
        </Switch>
      </main>
    </div>
  );
}

export default App;