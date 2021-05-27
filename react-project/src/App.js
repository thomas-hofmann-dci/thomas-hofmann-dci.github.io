import React from 'react';
import { BrowserRouter as Router, Link, Route, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  // hint on how to make the BrowserRouter work in case the app is hosted via github-pages:
  // https://medium.com/@arijit_chowdhury/deploy-react-app-with-react-router-to-github-pages-for-free-569377f483f
  // the basename parameter/prop was added to the Router-component.
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <aside>
            <Link to="/dashboard">Dashboard</Link>
            <span> | </span>
            <Link to="/about">About</Link>
          </aside>
          <main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
   </div>
  );
}

function Dashboard() {
  const location = useLocation();

  // programmatically change the route, - kind of a redirect
  /*
  const history = useHistory()
  history.push('/post/new')
  /**/
  return (
    <div>
      <h2>Dashboard</h2>
      {location.pathname}
    </div>
  );
}

function About() {
  const location = useLocation();
  return (
    <div>
      <h2>About</h2>
      {location.pathname}
    </div>
  );
}

export default App;
