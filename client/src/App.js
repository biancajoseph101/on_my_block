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
import { CheckSession } from './services/Auth';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar />
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
                setUser={setUser}
                user={user}
                authenticated={authenticated}
                id={user.id}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/signup" component={Signup} />
          <Route
            path="/login"
            component={(props) => (
              <Login
                {...props}
                setUser={setUser}
                user={user}
                authenticated={authenticated}
                toggleAuthenticated={toggleAuthenticated}
                handleLogOut={handleLogOut}
              />
            )}
          />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/crimepost"
            component={(props) => <CrimeTipPost {...props} userId={user.id} />}
          />
          <Route path="/" component={SearchBar} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
