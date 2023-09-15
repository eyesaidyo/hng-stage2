import { createContext, useState } from "react";

export const MovieContext = createContext({ movies: [], setMovies: () => { } })
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const value = { movies, setMovies }
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  )
}