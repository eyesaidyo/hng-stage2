import play from '../../assets/play.svg'
import imdb from '../../assets/imdb.svg'
import rotten from '../../assets/rotten.svg'
import poster from '../../assets/poster.svg'
import { Header } from '../../components/header'
import { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/movieCard'
import { MovieContext } from '../../contexts/movieContext'
import { SearchContext } from '../../contexts/searchContext'
import { Link } from 'react-router-dom'


export const Home = () => {
  const { movies, setMovies } = useContext(MovieContext)
  const { searchVal, } = useContext(SearchContext)
  const filterParam = new RegExp(searchVal, 'i')
  const filteredMovies = movies.filter(mov => filterParam.test(mov.title))
  console.log(searchVal)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=a260692c0d621b7427901892eb3562d0')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setMovies(res.results.slice(0, 9))
      })

  }, [searchVal])
  return (
    <>
      <div className="wick">
        <Header />
        <div className="description-box">
          <p className="text-wrapper">John Wick 3 : Parabellum</p>
          <div className="rating">
            <div className="IMDB">
              <img className="img" alt="Img" src={imdb} />
              <div className="div">86.0 / 100</div>
            </div>
            <div className="rotten-tomatoes">
              <img className="pngitem" alt="Pngitem" src={rotten} />
              <div className="div">97%</div>
            </div>
          </div>
          <p className="john-wick-is-on-the">
            John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14 million
            price tag on his head, he is the target of hit men and women everywhere.
          </p>
          <button className="button">
            <img src={play} className="play-instance" color="white" />
            <div className="watch-trailer">WATCH TRAILER</div>
          </button>
        </div>
      </div>
      <h2>Featured Movies</h2>
      <div className='cards-container'>
        {
          filteredMovies.map((movie, idx) => <Link to={`/${movie.id}`} className='link'> <Card
            img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            key={idx}
          />
          </Link>)
        }
      </div>
    </>
  )
}