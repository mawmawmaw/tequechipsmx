import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from './Header/Header';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <div id="tequechips">
          <Router>
              <Header/>
              <Route path="/" exact component={Home} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/contacto" exact component={Contacto} />
              <Footer/>
          </Router>
    </div>
  );
}

export default App;