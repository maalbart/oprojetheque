// == Import
import './style.scss';
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Promos from 'src/components/Promos';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Homepage /> */}
    <Promos />
    <Footer />
  </div>
);

// == Export
export default App;
