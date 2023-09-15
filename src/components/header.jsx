import tv from '../assets/tv.svg'
import search from '../assets/search.svg'
import menu from '../assets/menu.svg'
import { useContext, useState } from 'react';
import { MovieContext } from '../contexts/movieContext';
import { SearchContext } from '../contexts/searchContext';
import { LoadingContext } from '../contexts/loadingContext';



const SearchScreen = () => {
  return (

    <img className="searchicon" alt="Icon" src={search} />

  );
};
export const Header = () => {
  const { searchVal, setSearchVal } = useContext(SearchContext)
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const handleChange = (e) => {
    setIsLoading(true)
    setSearchVal(e.target.value)
    setIsLoading(false)
  }
  return (
    <div className='myHeader'>
      <div className='myLogoWrap'>
        <img className='myLogo' src={tv} />
        <h1>MovieBox</h1>
      </div>
      <div className="search-screen">
        <input type='text' className='myInput' placeholder='What do you want to watch?' onChange={handleChange}
          value={searchVal}
        />
        <SearchScreen className="search-instance" color="white" />
      </div>
      <div className='sign-in'>
        <h1>Sign in</h1>
        <div className='menub'>
          <img src={menu} alt='menu' className='menu' />
        </div>


      </div>
    </div>
  )
}