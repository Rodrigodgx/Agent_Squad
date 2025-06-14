import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cars" component={CarsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;