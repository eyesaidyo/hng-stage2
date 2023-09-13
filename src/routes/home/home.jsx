import play from '../../assets/play.svg'
import imdb from '../../assets/imdb.svg'
import rotten from '../../assets/rotten.svg'

import { Header } from '../../components/header'


export const Home = () => {
  return (
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
  )
}