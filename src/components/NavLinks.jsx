import { useDispatch } from 'react-redux';
import { links } from '../utils/Links';
import { toggleSidebar } from '../features/user/userSlice';
import { NavLink } from 'react-router-dom';
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            end
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={() => dispatch(toggleSidebar())}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
