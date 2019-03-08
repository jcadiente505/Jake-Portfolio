import React from 'react'
import SvgTitle from './svgTitle';

const Hero = props => {
    return (
        <div className="hero-section">
            <div className="svg-container">
                <SvgTitle
                    viewBox="0 0 500 500"
                />
            </div>
            <br/>
            <p className="hero-text">{ props.content }</p>
        </div>
    )
}

export default Hero;
