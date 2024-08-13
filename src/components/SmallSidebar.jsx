import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes></FaTimes>
          </button>
          <header>
            <Logo></Logo>
          </header>
          <div className="nav-links">Nav Links</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
