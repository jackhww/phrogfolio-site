import React from "react";

function SkillsItem({languages = [], frameworks = [], platforms = [], tools = [], others = []}) {
  const categories = [
    {label: 'Languages', skills: languages},
    {label: 'Cloud', skills: cloud},
    {label: 'Cloud Native', skills: cloudNative},
    {label: 'OSes', skills: operatingSystems},
    {label: 'Tools', skills: tools},
    {label: 'Certifications', skills: certifications},

  ];

  return (
    <div className="w-full text-left">
      {categories.map((category, index) => (
        <div className = 'pb-3' key={index}>
          <h4 className="text-lg font-bold underline underline-offset-8 decoration-2 mb-3">{category.label}</h4>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {category.skills.map((skill, index) => (
              <span key={index} className="inline-block px-3 py-1 font-semibold border-2 border-stone rounded-md">
                {skill}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SkillsItem;