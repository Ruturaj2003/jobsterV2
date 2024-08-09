import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not Found Text" />
        <h3>Ooppps!!</h3>
        <p>Cant Find What You're Looking For</p>
        <Link to={'/'}></Link>
      </div>
    </Wrapper>
  );
};
export default Error;
