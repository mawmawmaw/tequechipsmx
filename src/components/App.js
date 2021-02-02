import React, { lazy, Suspense} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.css';
import logo from '../img/logo.jpg';

const Home = lazy(() => import('./Home/Home'));
const Menu = lazy(() => import('./Menu/Menu'));
const Contacto = lazy(() => import('./Contacto/Contacto'));

const App = () => {
  return (
      <div id="tequechips">
        <div id="loader"><img src={logo} alt="Tequechips Logo"/></div>
          <Router>
            <Suspense fallback={<div id="loader"><img src={logo} alt="Tequechips Logo"/></div>}>
                <Header/>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/menu" exact component={Menu} />
                  <Route path="/contacto" exact component={Contacto} />
                </Switch>
                <Footer/>
            </Suspense>
          </Router>
      </div>
  );
}

export default App;