import React from "react";
import Particles from "react-particles-js";
import Hero from "../components/hero";
import SVGTitle from "../../src/assets/jacob-title.svg";

const Landing = props => {
  return (
    <div className="landing-section">
      <div className="bg">
        <Particles
          params={{
            particles: {
              number: {
                value: 168,
                density: {
                  enable: true,
                  value_area: 560.8390151666889
                }
              },
              color: {
                value: "#3fe1f7"
              },
              shape: {
                type: "triangle",
                stroke: {
                  width: 0,
                  color: "#e000ff"
                },
                polygon: {
                  nb_sides: 4
                },
                image: {
                  src: "",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4.005992965476349,
                random: true,
                anim: {
                  enable: false,
                  speed: 34.083992696287304,
                  size_min: 8.115236356258881,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 112.16780303333778,
                color: "#e000ff",
                opacity: 0.20831163420477017,
                width: 7.531266775095537
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />      
      </div>
      <Hero content="A Full Stack Web Developer based in Orlando, FL. Passionate about all things tech ranging from creative UI/UX Design to Software Engineering" />
    </div>
  );
};

export default Landing;
