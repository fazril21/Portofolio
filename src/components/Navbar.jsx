const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo"><a href="#home">FAZRIL</a></div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
