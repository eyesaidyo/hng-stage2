

import './App.css'
import { MovieProvider } from './contexts/movieContext'
import { SearchProvider } from './contexts/searchContext'
import { Home } from './routes/home/home'

function App() {

  return (
    <>
      <SearchProvider>
        <MovieProvider>
          <Home />
        </MovieProvider>
      </SearchProvider>
    </>
  )
}

export default App
