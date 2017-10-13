import React from 'react'
import ReferenceItem from './ReferenceItem'
import references from '../../content/references'

export default () => {
  return(
    <div className="container my-references">
      <h3 className="column">Mes références</h3>
      <div>
        {
          references.map(item => <ReferenceItem content={ item } key={ item.id } />)
        }
      </div>
    </div>
  )
}
