import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import star from '../../assets/star.svg'
import { LoadingContext } from "../../contexts/loadingContext"
import { DetailsNav } from "../../components/details-nav"

export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLiked, setIsLiked] = useState(false)
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a260692c0d621b7427901892eb3562d0`)
      .then(res => {
        setIsLoading(true)
        return res.json()
      })
      // .then(res => console.log(res))
      .then(res => {
        setMovie(res)
        // setIsLoading(false)
      })
      .catch(err => { console.log('Error:', err) })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return (
    <div className="details-wrap">
      <DetailsNav />
      {
        isLoading ?
          <h1 className="loading">Loading...</h1>
          :
          <div className="details-page">
            <div className="poster-wrap">
              <img alt="poster" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="backdrop" />
            </div>

            <div className="movie-details">
              <span data-testid="movie-title">{movie.title}</span>
              <span data-testid="movie-release-date">{movie.release_date}</span>
              <span data-testid="movie-runtime">{movie.runtime}</span>
              <img src={star} alt="favorite" className={isLiked ? 'star' : null} onClick={() => { setIsLiked(!isLiked) }} />
            </div>
            <div className="movie-details">
              <p data-testid="movie-overview">{movie.overview}</p>
            </div>
          </div>
      }
    </div>
  )
}