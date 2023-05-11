import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCofee from './componennt/AddCofee.jsx';
import Update from './componennt/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:'addcofee',
    element:<AddCofee></AddCofee>
  },
  {
    path:'update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
