import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className='navbar is-primary'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
              <span className='icon is-medium'><i className='las la-home la-2x' /></span>
          </Link>
          <div className='navbar-burger'><span/><span/><span/></div>
        </div>
      </nav>
    );
}