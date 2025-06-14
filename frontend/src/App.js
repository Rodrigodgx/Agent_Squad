import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ModelsPage from './components/ModelsPage';
import ModelDetails from './components/ModelDetails';
import NewsPage from './components/NewsPage';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/models" component={ModelsPage} />
        <Route path="/model/:id" component={ModelDetails} />
        <Route path="/news" component={NewsPage} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;