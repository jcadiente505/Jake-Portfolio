import React from 'react'

const SectionHeader = props => {
    return (
      <div>
          <h1 id={props.id} className="section-header">{ props.title }</h1>
          <span className="divider"></span>
      </div>
    )
}

export default SectionHeader;