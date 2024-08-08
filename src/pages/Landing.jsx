import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Our Site Logo" className="logo" />
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
          <button className="btn btn-hero">Login / Register</button>
        </div>
        <img src={main} alt="Hero Image" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
