// == Import
import './style.scss';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// import components
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Promos from 'src/components/Promos';
import Footer from 'src/components/Footer';
import Projects from 'src/components/Projects';
import Students from 'src/components/Students';
import Error from 'src/components/404';
import Team from 'src/components/Team';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/promos">
        <Promos />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/students">
        <Students />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
