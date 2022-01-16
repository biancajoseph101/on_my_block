import logo from "./logo.svg"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import CrimeTips from "./pages/CrimeTips"

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/crime-tips" component={CrimeTips} />
        </Switch>
      </main>
    </div>
  )
}

export default App
