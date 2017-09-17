import React from 'react'

const HeaderMainContent = props => {
  return (
    <div { ...props }>
      <div className="header-circle-img"></div>
      <h1>Jordan Beziau</h1>
      <h2>Développeur Front End</h2>
    </div>
  )
}

export default HeaderMainContent
