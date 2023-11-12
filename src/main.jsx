import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Photographers from './Pages/Photographers/Photographers';
import Packages from './Pages/Packages/Packages';
import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/services',
        element:<Services></Services>,
      },
      {
        path:'/photographers',
        element:<Photographers></Photographers>,
      },
      {
        path:'/packages',
        element:<Packages></Packages>,
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
