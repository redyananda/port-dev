import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-img">
        <img src="./heroImg.webp" alt="hero-img" />
      </div>
      <div className="hero-img-mobile">
        <img src="./heroImg_mobile.webp" alt="hero-img" />
      </div>
      <div className="hero-content">
        <h2 className="hero-content-title">Hola!</h2>
        <h1 className="hero-content-name">
          I'm <span className="hero-name">Primaaditya</span>
        </h1>
        <h2 className="hero-content-subtitle">Fullstack Developer</h2>
        <p className="hero-content-desc">
          A <span style={{color: "#c65040" }}>web developer</span> who loves turning <b>complex ideas</b> into <b>simple</b>,
          delightful products. <br /> Specialized in performant web apps built with a
          modern stack.
        </p>
        <button className="cta-btn">{"< contact me />"}</button>
      </div>
    </div>
  );
};

export default Hero;
