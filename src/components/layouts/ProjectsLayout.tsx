import ProjectCard from "../fragments/ProjectCard"
import { projects } from "../../assets"
import TextTitle from "../elements/TextTitle"

const ProjectsLayout = () => {
     return (
          <div className="space-y-10">
               <TextTitle title="Sagara Top Projects" />
               <div className="flex flex-col md:grid grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                         <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              image={project.image}
                              webUrl={project.webUrl}
                         />
                    ))}
               </div>
          </div>
     )
}

export default ProjectsLayout

