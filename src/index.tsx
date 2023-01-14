import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import About from './pages/about/About';
import Experiments from './pages/experiments/Experiments';
import Home from './pages/home/Home';
import Work from './pages/work/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'experiments',
    element: <Experiments />
  },
  {
    path: 'work',
    element: <Work />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);