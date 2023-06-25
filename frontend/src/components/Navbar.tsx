import { NavLink } from 'react-router-dom';
import data from '../data/navElements.json';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        {data.navElements.map((navElement) => (
          <li key={navElement.label}>
            <NavLink
              to={navElement.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              {navElement.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
