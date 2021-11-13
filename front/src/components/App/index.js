// == Import
import './style.scss';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

// import components
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Promos from 'src/components/Promos';
import { Promo } from 'src/components/Promos/Promo';
import Footer from 'src/components/Footer';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import Project from 'src/components/Projects/Project';
import Students from 'src/components/Students';
import Student from 'src/components/Students/Student';
import Error from 'src/components/404';
import Team from 'src/components/Team'; 
import Login from 'src/components/Login';
import Contact from 'src/components/Contact';
import Admin from 'src/components/Admin';

// == Composant
export default function App () {
  const islogged = useSelector((state) => state.user.logged)
  const role = useSelector((state) => state.user.role)

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
      <Route path="/profile">
        {!islogged ? <Redirect to="/login" /> : <Profile />}
        {/* <Profile /> */}
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
        {islogged ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/admin">
        {islogged && role === 1 ? <Admin /> : <Redirect to="/login" />}
        {/* <Admin /> */}
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
    </div>
  );
};
