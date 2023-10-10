import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './index.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Splash from './pages/splash/Splash';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);