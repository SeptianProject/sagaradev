import ProjectCard from "../fragments/ProjectCard"
import { assets } from "../../assets"
import TextTitle from "../elements/TextTitle"

const projects = [
     {
          title: "Langkah Sritanjung Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://sritanjung.sagaradev.com",
     },
     {
          title: "Eksplosa Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://eksplosa.sagaradev.com",
     },
     {
          title: "Langkah Sritanjung Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://sritanjung.sagaradev.com",
     },
     {
          title: "Eksplosa Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://eksplosa.sagaradev.com",
     },
]

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

