import ProjectCard from "../fragments/ProjectCard"
import { projects } from "../../assets"
import TextTitle from "../elements/TextTitle"
import React from "react"
import Button from "../elements/Button"

interface ProjectsLayoutProps {
     isMobile?: boolean
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ isMobile }) => {
     const [projectsToShow, setProjectsToShow] = React.useState<number>(isMobile ? 2 : 4);
     const handleLoadMore = () => {
          if (projectsToShow > 2) {
               setProjectsToShow(2);
               const projectsElement = document.getElementById('projects');
               window.scrollTo({ top: projectsElement ? projectsElement.offsetTop - 20 : 0, behavior: 'smooth' })
          } else {
               setProjectsToShow(projects.length);

               setTimeout(() => {
                    const projectsElement = document.getElementById('projects');
                    if (projectsElement) {
                         const projectCards = projectsElement.querySelectorAll('.flex.flex-col.md\\:grid > *');

                         if (projectCards.length > 0) {
                              const lastCard = projectCards[projectCards.length - 1];
                              if (lastCard instanceof HTMLElement) {
                                   lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }
                         }
                    }
               }, 100);
          }
     }

     const displayedProjects = projects.slice(0, projectsToShow);

     return (
          <div id="projects" className="space-y-10">
               <TextTitle title="Sagara Top Projects" />
               <div className="flex flex-col md:grid grid-cols-2 gap-8 ">
                    {displayedProjects.map((project, index) => (
                         <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              image={project.image}
                              webUrl={project.webUrl}
                         />
                    ))}
               </div>
               {isMobile && (<Button
                    className="flex justify-center mx-auto py-3 h-full w-44 text-xl font-semibold hover:scale-95 hover:-translate-y-1 transition-transform duration-300"
                    title={`${projectsToShow > 2 ? 'Show Less' : 'Load More'}`}
                    onClick={() => handleLoadMore()}
                    disabled={projects.length <= 2}
                    isProjectBtn
               />)}
          </div>
     )
}

export default ProjectsLayout

