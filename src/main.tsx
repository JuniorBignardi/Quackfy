import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'

// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home.tsx";
import ErrorPage from './routes/ErrorPage.tsx';
import Quiz from './routes/Quiz.tsx';
import { QuizProvider } from './QuizContext.tsx';
import Results from './routes/Results.tsx'
import Rank from './routes/Ranking.tsx';



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
        path: "quiz/:category/:difficulty/",
        element: <Quiz />,
      },
      {
          path: "/results",
          element: <Results/>
      },
      {
        path: "/ranking",
        element: <Rank/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizProvider>
        <RouterProvider router= {router} />
      </QuizProvider>
  </React.StrictMode>,
)
