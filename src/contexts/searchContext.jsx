import { createContext, useState } from "react";

export const SearchContext = createContext({ movies: [], setMovies: () => { } })
export const SearchProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState('')
  const value = { searchVal, setSearchVal }
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}