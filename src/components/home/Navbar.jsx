// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import BlogPage from '../../components/blog/blog';
import './Navbar.css';

const NavItem = ({ text, to }) => {
  if (to) {
    return <Link to={to} className="navbar-item">{text}</Link>;
  }
  return <a href="#" className="navbar-item">{text}</a>;
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string
};

const Card = ({ number, imageSrc, title, description }) => (
  <div className="card">
    <div className="card-image">
      <img src={imageSrc} alt={`Goal ${number}`} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

Card.propTypes = {
  number: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


const HowItWorksSection = () => {
  const cardData = [
    {
      number: 1,
      imageSrc: './assets/test.png',
      title: 'Goal',
      description: 'To help your company grow, we want to understand your goals. With that, we can provide you with a complete road map towards achieving them.',
    },
    {
      number: 2,
      imageSrc: './assets/comp.png',
      title: 'Competitors',
      description: 'Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.',
    },
    {
      number: 3,
      imageSrc: './assets/settings.png',
      title: 'Strategy',
      description: 'Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​',
    },
    {
      number: 4,
      imageSrc: './assets/team.png',
      title: 'Launch',
      description: 'Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​',
    },
  ];

  return (
    <div className="how-it-works-section">
      <h2 className="section-title">HOW IT WORKS</h2>
      <div className="cards-container">
        {cardData.map((card) => (
          <Card key={card.number} {...card} />
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <picture className="navbar-logo">
          <img src="./assets/logo_blog.png" alt="DAPIXEL logo" />
        </picture>
        <div className="navbar-menu">
          {/* <a href="/TicTacToe" className="game">Click Here to play</a> */}
          <Link to="/TicTacToe" className='game'>Click here to play</Link>
          <NavItem text="Services" />
          <NavItem text="Industries" />
          <NavItem text="About Us" />
          <NavItem text="Team DaPixel" />
          <Link to="/blog" className="navbar-item" target='new'>Blog</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section" style={{marginTop:'10px'}}>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">We help you grow your conversations</h1>
            <p className="hero-description">Featured in leading publications around the world</p>
            <picture className="desc1">
              <img src='./assets/img1.png'></img>
            </picture>
            <button className="contact-button">Contact Us</button>
          </div>
          <picture className="hero-image">
            <img src="./assets/Group.png" alt="Group" />
          </picture>
        </div>
      </div>

      {/* How It Works Section */}
      {/* <div className="how-it-works-section">  
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="cards-container">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="card">
              <div className="card-image">
                <img src={`./assets/img_one.png`} alt={`Goal ${num}`} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Goal {num}</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <HowItWorksSection />

      {/* Consultation Section */}
      <div className="consultation-container">
        <div className="consultation-content">
          <div className="consultation-text">
            <span className="consultation-line"></span>
            <h2 className="consultation-title">Book A Free Digital Marketing Consultation</h2>
          </div>
          <form className="consultation-form">
            <input 
              type="email" 
              className="consultation-input" 
              placeholder="Your Email" 
              required 
            />
            <button type="submit" className="consultation-button">
              Book my free meeting
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-container">
        <h2 className="testimonials-title">Our Testimonials</h2>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="./assets/testimo.png" alt="Client" />
          </div>
          <div className="testimonial-content">
            <p>Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
            </p>
            <p className="testimonial-author">— Kimmo Hakonen - Skrum Master at DaGear AB</p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-container">
        <div className="articles-content">
          <div className="articles-header">
            <span className="articles-line"></span>
            <h2 className="articles-title">Digital Marketing Articles</h2>
          </div>
          <div className="articles-cards">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="article-card">
                <h3 className="article-card-title">Top 5 SaaS Businesses –
                August 2021 {num}</h3>
                <p className="article-card-description">Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS</p>
                <button className="article-card-button">Read more &gt;</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why DaPixel Section */}
      <div className="why-dapixel-container">
        <div className="why-dapixel-content">
          <div className="why-dapixel-text">
            <h2 className="why-dapixel-title">Why DaPixel?</h2>
            <p className="why-dapixel-description">
            To get customers, its imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.
            </p>
            <button className="why-dapixel-button">Book Free Meeting</button>
          </div>
          <div className="why-dapixel-image">
            <img src="./assets/Marketing.png" alt="Why DaPixel" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">

<div className="footer-container">

    <div className="footer-section">

        <h2 className="footer-title">DaPixel</h2>

        <p className="footer-address">123 Digital Street, Tech City, 12345</p>

        {/* <div className="social-links">

            <span>FB</span>

            <span>TW</span>

            <span>IG</span>

            <span>LI</span>

        </div> */}

    </div>

    <div className="footer-section">

        <h3 className="footer-subtitle">Company</h3>

        <ul className="footer-links">

            {['Home', 'About Us', 'Latest Blog', 'Our Specialist', 'Contact Us', 'Privacy Policy'].map((item) => (

                <li key={item}><a href="#" className="footer-link">{item}</a></li>

            ))}

        </ul>

    </div>

    <div className="footer-section">

        <h3 className="footer-subtitle">Services</h3>

        <ul className="footer-links">

            {['Digital Marketing', 'Free Audit', 'Google Ads', 'Cryptocurrency Marketing', 'SEO', 'SAAS Marketing', 'Website & SEO'].map((item) => (

                <li key={item}><a href="#" className="footer-link">{item}</a></li>

            ))}

        </ul>

    </div>

</div>

</footer>
</>
  );
};

export default Navbar;