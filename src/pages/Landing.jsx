import main from '../assets/images/main.svg';
import styled from 'styled-components';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh-var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 932px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        {/* Info  */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            doloribus quis, consectetur molestiae ut sapiente ullam placeat et
            maxime! Hic qui rerum dolores doloremque architecto quod enim
            officia reiciendis reprehenderit. Consequuntur tempora reiciendis
            delectus voluptatem cum animi recusandae eum sint maiores obcaecati
            corporis qui facere sed eius culpa, placeat hic dolore iusto ut
            quibusdam iste dolorum. Iusto delectus totam nobis.
          </p>
          <Link to={'/register'} className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="Hero Image" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
