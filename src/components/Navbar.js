import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="inner-navbar">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}
