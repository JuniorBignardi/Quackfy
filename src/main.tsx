import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'

// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home.tsx";
import ErrorPage from './routes/ErrorPage.tsx';
import Quiz from './routes/Quiz.tsx';

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
