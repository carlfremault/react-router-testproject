import { NavLink } from 'react-router-dom';
import data from '../data/navElements.json';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {data.navElements.map((navElement) => (
          <li>
            <NavLink key={navElement.label} to={navElement.path}>
              {navElement.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
