const Hero = () => {
  return (
    <section id="home" className="section-dark">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-title">Fazril Fachrezi Ramdani</h1>
          <h2 className="hero-role">Fullstack Developer</h2>
          <div>
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="/CV_fazril.pdf" download="CV_fazril.pdf" target="_blank" className="btn-secondary">Download CV</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/profile.jpg" alt="Fazril Fachrezi Ramdani" className="hero-image" onError={(e) => {
            e.target.src = "https://via.placeholder.com/350x350.png?text=Fazril";
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
