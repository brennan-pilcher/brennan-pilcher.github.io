import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import About from './pages/about/About';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);