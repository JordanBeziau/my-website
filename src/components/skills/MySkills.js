import React, { Component } from 'react'
import SkillsItem from './SkillsItem'
import TitleBullet from '../title/TitleBullet'
import skillContent from '../../content/skillsItem'

class MySkills extends Component {
  render() {
    const circleProps = {
      stroke: [
        'rgb(11, 52, 80)',
        'rgb(11, 52, 80)',
        'rgba(11, 52, 80, .6)',
        'rgb(11, 52, 80)',
        'rgba(11, 52, 80, .6)',
        'rgb(11, 52, 80)'
      ],
      strokeWidth: [1, 1, 3, 2, 1, 1],
      strokeDasharray: [60, 31, 35, 20, 25, 8]
    }
    return (
      <section className="my-skills">
        <div className="container">
          <div className="title-wrap">
            <TitleBullet properties={circleProps} />
            <h3 className="column">Mes compétences</h3>
          </div>
          <main className="skills-wrap">
            {skillContent.map(item => (
              <SkillsItem key={item.id} content={item} />
            ))}
          </main>
        </div>
      </section>
    )
  }
}

export default MySkills
