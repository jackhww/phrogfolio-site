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
           {skills.map((project, index) => (
              <SkillsItem
                 key={index}
                 languages={project.languages}
                 frameworks={project.frameworks}
                 platforms={project.platforms}
                 tools={project.tools}
                 others={project.others}
                 cloud={project.cloud}
                 cloudNative={project.cloudNative}
                 certifications={project.certifications}
                 operatingSystems={project.operatingSystems}
              />
           ))}
        </div>
     </div>
     </div>
  )
}

export default Skills;