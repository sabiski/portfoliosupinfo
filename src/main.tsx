import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Competences from './Copetences.tsx';
import Projets from './Projets.tsx';
import Formations from './Formations.tsx';
import Contact from './Contact.tsx';




const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/competences",
    element:<Competences></Competences>
  },
  {
    path:"/projets",
    element:<Projets></Projets>
  },
  {
    path:"/formations",
    element:<Formations></Formations>
  },
  {
    path:"/contact",
    element:<Contact></Contact>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
