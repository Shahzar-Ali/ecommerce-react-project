import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_img.png'
import './Hero.css'
 
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                  <p>new</p>
                    <img src={hand_icon} alt="icon" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="Hero img" />
        </div>
    </div>
  )
}

export default Hero