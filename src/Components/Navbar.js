import "./Styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p className="navbar-logo__name">d</p>
        <p className="navbar-logo__symbol">_</p>
      </div>
      <div className="navbar-list">
        <li className="navbar-list__item">Home</li>
        <li className="navbar-list__item">Projects</li>
        <li className="navbar-list__item">About</li>
      </div>
      <div className="navbar-letstalk">
        <button className="navbar-letstalk__button">LET'S TALK</button>
      </div>
    </div>
  );
}

export default Navbar;
