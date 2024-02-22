// import React from 'react'
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './pages/Error'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AboutMe />,
        index: true,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
);
