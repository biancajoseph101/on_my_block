import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import CrimeTip from './pages/CrimeTip';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CrimeDetails from './components/CrimeDetails';
import UpdateCrime from './components/UpdateCrime';
import CrimeTipPost from './pages/CrimeTipPost';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/crimes/update/:id" component={UpdateCrime} />
          <Route exact path="/crimes/:id" component={CrimeDetails} />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/crimes" component={CrimeTip} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/crimepost" component={CrimeTipPost} />
          <Route path="/" component={SearchBar} />
        </Switch>
      </main>
    </div>
  );
}

export default App;