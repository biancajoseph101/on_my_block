import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CrimeDetails from './components/CrimeDetails';
import UpdateCrime from './components/UpdateCrime';
import CrimeTipPost from './pages/CrimeTipPost';
import About from './pages/About';
import Safety from './pages/Safety';
import { CheckSession } from './services/Auth';

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
    window.location.reload();
  };

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar authenticated={authenticated} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Switch>
          <Route exact path="/crimes/update/:id" component={UpdateCrime} />
          <Route
            exact
            path="/crimes/:id"
            component={(props) => (
              <CrimeDetails
                {...props}
                id={user.id}
                authenticated={authenticated}
              />
            )}
          />
          <Route
            exact
            path="/recommendations"
            component={() => <Recommendations authenticated={authenticated} />}
          />
          <Route exact path="/signup" component={Signup} />
          <Route
            path="/login"
            component={() => (
              <Login
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                authenticated={authenticated}
                user={user}
                handleLogOut={handleLogOut}
              />
            )}
          />
          <Route
            exact
            path="/"
            component={(props) => (
              <Home
                {...props}
                authenticated={authenticated}
                username={user.username}
              />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/crimepost"
            component={(props) => (
              <CrimeTipPost
                {...props}
                userId={user.id}
                authenticated={authenticated}
              />
            )}
          />
          <Route
            path="/crimes"
            component={(props) => (
              <SearchBar
                {...props}
                authenticated={authenticated}
                username={user.username}
              />
            )}
          />
          <Route exact path="/safety" component={Safety} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
