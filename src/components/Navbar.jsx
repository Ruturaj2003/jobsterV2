import Wrapper from '../assets/wrappers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './Logo';
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import {
  clearStore,
  logoutUser,
  toggleSidebar,
} from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [logoutDropDown, setLogoutDropDown] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div className="">
          <Logo></Logo>
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setLogoutDropDown(!logoutDropDown)}
          >
            <FaUserCircle></FaUserCircle>
            {user?.name}
            <FaCaretDown></FaCaretDown>
          </button>
          <div
            className={logoutDropDown ? 'dropdown show-dropdown' : 'dropdown'}
          >
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => {
                dispatch(clearStore('Logged Out Successfully'));
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
