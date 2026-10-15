import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* Custom logo image */}
      <img src="/logo.png" alt="My portfolio logo" height="48" style={{ marginRight: '16px' }} />
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/projects">Projects </Link>
      <Link to="/education">Education </Link>
      <Link to="/services">Services </Link>
      <Link to="/contact">Contact </Link>
    </nav>
  );
}

export default Navbar;