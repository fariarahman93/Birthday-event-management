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
import Login from './Pages/Login/Login';
import AuthProvider from './providers/AuthProvider';
import Detail from './Pages/Detail/Detail';
import PrivateRoute from './providers/PrivateRoute';

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
        loader: () =>fetch('/photographer.json')
      },
      {
        path:'/packages',
        element:<Packages></Packages>,
        loader: () =>fetch('/package.json')
      },
      {
           path:'/packages/:id',
           element:<PrivateRoute><Detail></Detail></PrivateRoute>,
           loader: () =>fetch('/package.json')
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>   <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
