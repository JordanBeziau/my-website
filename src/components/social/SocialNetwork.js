import React from 'react'
import Networks from '../../content/socialNetwork'
import SocialItem from './SocialItem'

export default () => {
  return (
    <section className="social-network">
      <div className="container">
        {
          Networks.map(item => <SocialItem key={ item.id } content={ item } />)
        }
      </div>
    </section>
  )
}
