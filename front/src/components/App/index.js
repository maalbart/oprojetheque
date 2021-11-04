// == Import
import './style.scss';
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
import Loader from 'src/components/Loader';
import Error from 'src/components/404';
import Team from 'src/components/Team'; 
import Login from 'src/components/Login';
import Contact from 'src/components/Contact';
import Admin from 'src/components/Admin';

// == Composant
export default function App () {

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
      <Route path="/promo/:id">
        <Promo />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/project/:id">
        <Project />
      </Route>
      <Route path="/students">
        <Students />
      </Route>
      <Route path="/student/:id">
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
      <Route path="/admin">
        <Admin />
      </Route>
      <Route>
        <Error />
      </Route>
     </Switch>
    <Footer />
    </div>
  );
};
