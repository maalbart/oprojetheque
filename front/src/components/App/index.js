// == Import
import './style.scss';
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Promos from 'src/components/Promos';
import Footer from 'src/components/Footer';
import Projects from 'src/components/Projects';
import Studients from 'src/components/Studients';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Homepage /> */}
    {/* <Promos /> */}
    {/* <Projects /> */}
    <Studients />
    <Footer />
  </div>
);

// == Export
export default App;
