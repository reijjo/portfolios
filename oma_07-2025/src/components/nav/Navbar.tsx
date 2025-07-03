import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav id="home">
      <div className="nav-content">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};
