import HeroImg from "../../assets/images/hero.png";
import "./Hero.css";
import Line from "../../components/Line";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">digital artist</p>
          <p className="hero-title">portfolio</p>
        </div>
        <img src={HeroImg} className="hero-img" alt="hero" />
      </div>
      <Line />
    </div>
  );
};

export default Hero;
