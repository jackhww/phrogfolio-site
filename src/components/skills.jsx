import React from 'react';
import skills from '../data/skills';
import SkillsItem from './skillsItem';
import Title from './title';

function Skills() {
  return (
      <div>
      <Title>Skills</Title>
     <div className="flex flex-col md:flex-row items-center justify-left pb-12">
        <div className="grid ">
           {skills.map(project => (
              <SkillsItem
                 languages = {project.languages}
                 frameworks ={ project.frameworks}
                 platforms = {project.platforms}
                 tools = {project.tools}
                 others = {project.others}
              />
           ))}
        </div>
     </div>
     </div>
  )
}

export default Skills;