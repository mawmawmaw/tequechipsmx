import React, { lazy, Suspense} from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.css';

const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('./Home/Home'));
const Menu = lazy(() => import('./Menu/Menu'));
const Contacto = lazy(() => import('./Contacto/Contacto'));
const Footer = lazy(() => import('./Footer/Footer'));

const renderLoader = () => <p>Loading...</p>;

const App = () => {
  return (
      <div id="tequechips">
          <Router>
            <Suspense fallback={renderLoader()}>
              <Header/>
              <Route path="/" exact component={Home} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/contacto" exact component={Contacto} />
              <Footer/>
            </Suspense>
          </Router>
      </div>
  );
}

export default App;