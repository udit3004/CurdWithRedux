import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './comp/Home.jsx';
import ABout from './comp/ABout.jsx';
import Todos from './comp/Todos.jsx';
import Contactus from './comp/Contactus.jsx';
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx';
import Auth from './comp/Auth.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <ABout />,
      },
      {
        path:"/todo",
        element:<Todos/>
      },{
        path:"/contact",
        element:<Contactus/>
      }
    ],

  },
  ,{
    path:"/auth",
    element:<Auth/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>,
)
