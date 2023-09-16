import { MovieBox } from "./header"
import home from '../assets/home.svg'
import movies from '../assets/movies.svg'
import series from '../assets/series.svg'
import cal from '../assets/calendar.svg'
export const DetailsNav = () => {
  return (
    <div className="details-nav">
      <MovieBox />
      <div className="nav-item">
        <img src={home} className="nav-icon"></img>
        <p>Home</p>
      </div>
      <div className="nav-item">
        <img src={movies} className="nav-icon"></img>
        <p>Movies</p>
      </div>
      <div className="nav-item">
        <img src={series} className="nav-icon"></img>
        <p>TV Series</p>
      </div>
      <div className="nav-item">
        <img src={cal} className="nav-icon"></img>
        <p>Upcoming</p>
      </div>
    </div>
  )
}