import React from 'react';

const Navbar = props => {
    return(
        <div className="nav-wrapper">
            <h1>Jacob Cadiente</h1>
            <div className="nav-menu">
                <div className="svg-wrapper">
                    <a href="#about">
                        <svg height="40" width="120" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="40" width="120" />
                            <text x="25" y="25" fill="#fff">About Me</text>
                        </svg>
                    </a>
                </div>
                <div className="svg-wrapper">
                    <a href="#portfolio">
                        <svg height="40" width="120" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="40" width="120" />
                            <text x="30" y="25" fill="#fff">Portfolio</text>
                        </svg>
                    </a>
                </div>
                <div className="svg-wrapper">
                    <a href="#">
                        <svg height="40" width="120" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="40" width="120" />
                            <text x="20" y="25" fill="#fff">Contact Me</text>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
