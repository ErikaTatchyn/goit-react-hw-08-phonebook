import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
