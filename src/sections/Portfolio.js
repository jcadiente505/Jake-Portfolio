import React from 'react'
import SectionHeader from '../components/sectionHeader';
import Card from '../components/card';

const card1 = [
    <i className="devicon-react-plain-wordmark colored"></i>,
    <i className="devicon-sass-original colored"></i>,
    <i className="devicon-nodejs-plain colored"></i>,
    <i className="devicon-mongodb-plain-wordmark colored"></i>
  ];
  
  const card2 = [
    <i className="devicon-bootstrap-plain-wordmark colored"></i>,
    <i className="devicon-nodejs-plain colored"></i>,
    <i className="devicon-jquery-plain-wordmark colored"></i>,
    <i className="devicon-mysql-plain-wordmark colored"></i>
  ];
  
  const card3 = [
    <i className="devicon-nodejs-plain colored"></i>,
    <i className="devicon-react-plain-wordmark colored"></i>,
    <i className="devicon-css3-plain-wordmark colored"></i>,
    <i className="devicon-html5-plain-wordmark colored"></i>
  ];
  
  const card4 = [
    <i className="devicon-html5-plain-wordmark colored"></i>,
    <i className="devicon-css3-plain-wordmark colored"></i>,
    <i className="devicon-jquery-plain-wordmark colored"></i>,
    <i className="devicon-bootstrap-plain-wordmark colored"></i>
  ]

const Portfolio = props => {
    return (
      <div className="portfolio-section">
        <SectionHeader id="portfolio" title="Portfolio"/>
        <div className="projects">
            <Card 
                title="BarBook"
                link="https://intense-oasis-43717.herokuapp.com/"
                image={require('../assets/images/barbook.jpeg')}
                text="A mobile recipe repository for bartenders"
                tools={card1}
            />
            <Card 
                title="FoodFinder"
                link="https://hidden-oasis-78659.herokuapp.com/"
                image={require('../assets/images/foodfinder.jpeg')}
                text="store favorite restaurants, or try new ones!"
                tools={card2}
            />
            <Card 
                title="Star Wars Memory Game"
                link="https://jcadiente505.github.io/clicky-game"
                image={require('../assets/images/star-wars-image.jpg')}
                text="A clicky game with your favorite space epic"
                tools={card3}
            />
            <Card 
                title="Final Fantasy Game"
                link="https://jcadiente505.github.io/unit-4-game/"
                image={require('../assets/images/final-fantasy.jpg')}
                text="A RPG game based on classic characters"
                tools={card4}
            />
        </div>
      </div>
    )
}

export default Portfolio;