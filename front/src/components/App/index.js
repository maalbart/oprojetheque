// == Import
import './style.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// import components
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Promos from 'src/components/Promos';
import { Promo } from 'src/components/Promos/Promo';
import Footer from 'src/components/Footer';
import Projects from 'src/components/Projects';
import Project from 'src/components/Projects/Project';
import Students from 'src/components/Students';
import Student from 'src/components/Students/Student';
import Error from 'src/components/404';
import Team from 'src/components/Team';
import Login from 'src/components/Login';
import Contact from 'src/components/Contact';
import axios from 'axios';

// == Composant
export default function App () {
  // data from api request store into state
  // const [results, setResults] = useState([]);
  // const [query, setQuery] = useState('')
  // function for request api
  // const loadData = () => {
  //   axios.get(``)
  //     .then((response) => {
  //       const newData = [
  //         ...results,
  //         ...response.data.items
  //       ];
  //       // store new data in state result
  //       setResults(newData);
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => {

  //     })
  // }

  return (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/promos">
        <Promos />
      </Route>
      <Route path="/promos/promo">
        <Promo />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/projects/project">
        <Project />
      </Route>
      <Route path="/students">
        <Students />
      </Route>
      <Route path="/students/student">
        <Student />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
  );
};
