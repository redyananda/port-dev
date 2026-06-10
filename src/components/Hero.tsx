import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-img">
        <img src="./heroImg.png" alt="hero-img" />
      </div>
      <div className="hero-content">
        <h2 style={{ fontSize: "80px" }}>Hola!</h2>
        <h1 style={{ fontSize: "120px" }}>
          I'm <span className="hero-name">Primaaditya</span>
        </h1>
        <h2 style={{ fontSize: "68px" }}>Fullstack Developer</h2>
        <p style={{ fontSize: "20px", marginTop: "16px" , marginBottom: "40px" }}>
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
