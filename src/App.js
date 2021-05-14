import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar.js';
import Home from './home/Home.js';
import Tasks from './tasks/Tasks.js';

function App() {
  return (
    <Router>

      <Navbar />

      <main className="container">
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>

    </Router>
  );
}

export default App;
