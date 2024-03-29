import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioItem';
import Title from './title';
function Portfolio() {
  return (
      <div>
      <Title>Portfolio</Title>
     <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {portfolio.map(project => (
              <PortfolioItem 
                 imgUrl={project.imgUrl}
                 title={project.title}
                 stack={project.stack}
                 link={project.link}
              />
           ))}
        </div>
     </div>
     <p className="pt-3 text-sm text-gray-500">* Click on the images to learn more, some links may not be available just yet!</p>

     </div>
     
  )
}

export default Portfolio;