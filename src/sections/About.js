import React from "react";
import SectionHeader from "../components/sectionHeader";
import Card from '../components/card';

const card1 = [
  <i className="devicon-html5-plain-wordmark colored"></i>,
  <i className="devicon-sass-original colored"></i>,
  <i className="devicon-react-original-wordmark colored"></i>,
  <i className="devicon-vuejs-plain-wordmark colored"></i>
];

const card2 = [
  <i className="devicon-bootstrap-plain-wordmark colored"></i>,
  <i className="devicon-css3-plain-wordmark colored"></i>,
  <i className="fas fa-mobile-alt"></i>,
  <i className="fas fa-desktop"></i>
];

const card3 = [
  <i className="devicon-nodejs-plain colored"></i>,
  <i className="devicon-amazonwebservices-plain-wordmark colored"></i>,
  <i className="devicon-mysql-plain-wordmark colored"></i>,
  <i className="devicon-webpack-plain-wordmark colored"></i>
];

const card4 = [
  <i className="devicon-git-plain-wordmark colored"></i>,
  <i className="devicon-trello-plain-wordmark colored"></i>,
  <i className="devicon-docker-plain-wordmark colored"></i>,
  <i className="devicon-visualstudio-plain-wordmark colored"></i>
]

const About = props => {
  return (
    <div className="about-section">
      <SectionHeader id="about" title="About Me" />
      <div className="services">
        <Card
          title="Engaging UI/UX"
          link=" "
          image={require('../assets/images/front-end.jpeg')}
          text="smooth, creative Front End Development"
          tools={card1}
        />
        <Card
          title="Responsive Design"
          link=" "
          image={require('../assets/images/mobile-design.jpeg')}
          text="responsive design for phone, tablet or desktop"
          tools={card2}
        />
        <Card
          title="Back End Development"
          link=" "
          image={require('../assets/images/back-end.jpeg')}
          text="from RESTful API's to secure Databases"
          tools={card3}
        />
        <Card
          title="DevOps/Agile development"
          link=" "
          image={require('../assets/images/agile-dev.jpeg')}
          text="experienced in working in a development team"
          tools={card4}
        />
      </div>
      <div data-aos="fade-right" className="charts">
        <div className="chart chart--dev">
          <span className="chart__title">Development</span>
          <ul className="chart--horiz">
            <li data-aos="fade-right" className="chart__bar" style={{width: "98%"}}>
              <span className="chart__label">HTML5</span>
              <span className="percentage">98%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "90%"}}>
              <span className="chart__label">CSS3 & Sass</span>
              <span className="percentage">90%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "80%"}}>
              <span className="chart__label">Javascript</span>
              <span className="percentage">80%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "75%"}}>
              <span className="chart__label">React.js</span>
              <span className="percentage">75%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "80%"}}>
              <span className="chart__label">Node.js</span>
              <span className="percentage">80%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "50%"}}>
              <span className="chart__label">Wordpress</span>
              <span className="percentage">50%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "60%"}}>
              <span className="chart__label">Docker/Vagrant</span>
              <span className="percentage">60%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "70%"}}>
              <span className="chart__label">SQL</span>
              <span className="percentage">70%</span>
            </li>
            <li data-aos="fade-right" className="chart__bar" style={{width: "50%"}}>
              <span className="chart__label">Webpack</span>
              <span className="percentage">50%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
