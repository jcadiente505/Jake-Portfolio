import React from 'react'

const Card = props => {
    return (
      <div data-aos="fade-up" className="card">
        <div className="card-image">
            <a href={ props.link }>
             <img src={ props.image } alt="card-background"/>
            </a>
        </div>
        <div className="card-content">
            <h2 className="card-title">{ props.title }</h2>
            <span className="divider"></span>
            <p className="card-text">{ props.text }</p>
            <div className="card-tools">
                <ul>
                    { props.tools.map((tool, index) => {
                        // console.log(tool);
                        return (
                            <li key={index}>{ tool }</li>
                        )
                    })}
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Card;
