import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <img src={facebook} />
        <img src={insta} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
      <div className='tos'>
        <p>Conditions of use</p>
        <p>Privacy & policy</p>
        <p>Press Room</p>
      </div>
      <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
  )
}