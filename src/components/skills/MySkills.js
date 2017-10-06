import React, { Component } from 'react'
import SkillsItem from './SkillsItem'
import skillContent from '../../content/skillsItem'

class MySkills extends Component {
  render() {
    return(
      <section className="my-skills">
        <div className="container">
          {
            skillContent.map(item => <SkillsItem key={ item.id } content={ item.name } />)
          }
        </div>
      </section>
    )
  }
}

export default MySkills
