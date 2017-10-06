import React from 'react'
import ReferenceItem from './ReferenceItem'
import references from '../../content/references'

export default () => {
  return(
    <div className=" container my-references">
      {
        references.map(item => <ReferenceItem content={ item } key={ item.id } />)
      }
    </div>
  )
}
