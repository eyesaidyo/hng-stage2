import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import { Home } from './routes/home/home.jsx';
import { MovieDetails } from './routes/movie-details/movie-details.jsx';
import { MovieProvider } from './contexts/movieContext.jsx';
import { SearchProvider } from './contexts/searchContext.jsx';
import { LoadingProvider } from './contexts/loadingContext.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [

    ]
  },
  {
    path: ':id',
    element: <MovieDetails />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <MovieProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </MovieProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
