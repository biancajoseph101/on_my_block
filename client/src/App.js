import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recommendations" component={Recommendations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;