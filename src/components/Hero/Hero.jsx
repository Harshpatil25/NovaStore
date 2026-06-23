import './Hero.css'
import heroImg from '../../assets/hero-image.png'
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <>
            <div className="hero-container">
                <img src={heroImg} alt="Hero Image" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Nova Store</h1>
                    <p className="hero-description">Your one-stop shop for all your needs.<br></br>Quality products at competitive prices.</p>
                    {/* <button className="glow-on-hover" >Shop Now</button> */}
                    <Link to="/shop" className="glow-on-hover">Shop Now</Link>
                </div>
            </div>
        </>
    )
}

export default Hero;