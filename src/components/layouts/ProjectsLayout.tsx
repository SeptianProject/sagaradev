import type React from "react"

interface ProjectsLayoutProps {
     isMobile: boolean
}

const projects = [
     {
          title: "Langkah Sritanjung Website",
          description: "Whether you need a redesign or a new website experience.",
          image: "/placeholder.svg?height=400&width=200",
          appScreenshots: [
               "/placeholder.svg?height=400&width=200",
               "/placeholder.svg?height=400&width=200",
               "/placeholder.svg?height=400&width=200",
          ],
     },
     {
          title: "Weave Your Time, Design Your Destiny",
          description: "A mobile app for time management and personal growth.",
          image: "/placeholder.svg?height=400&width=200",
          appScreenshots: [
               "/placeholder.svg?height=400&width=200",
               "/placeholder.svg?height=400&width=200",
               "/placeholder.svg?height=400&width=200",
          ],
     },
]

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ isMobile }) => {
     return (
          <div>
               <h2 className="text-2xl font-bold mb-6">Sagara Top Projects</h2>
               {isMobile ? (
                    <div className="flex flex-col space-y-4">
                         {projects.map((project, index) => (
                              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                                   <div className="relative h-64 bg-gray-800 text-white p-4 flex flex-col justify-end">
                                        <div className="absolute inset-0 opacity-70">
                                             <img
                                                  src={project.image || "/placeholder.svg"}
                                                  alt={project.title}
                                                  className="w-full h-full object-cover"
                                             />
                                        </div>
                                        <div className="relative z-10">
                                             <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                             <p className="text-sm mb-4">{project.description}</p>
                                             <div className="flex space-x-2">
                                                  <button className="bg-blue-600 text-white text-xs py-1 px-3 rounded">See Detail</button>
                                                  <button className="bg-white text-gray-800 text-xs py-1 px-3 rounded">Visit Website</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="p-4 flex overflow-x-auto space-x-2">
                                        {project.appScreenshots.map((screenshot, index) => (
                                             <img
                                                  key={index}
                                                  src={screenshot || "/placeholder.svg"}
                                                  alt={`${project.title} screenshot ${index + 1}`}
                                                  className="h-40 w-auto rounded-lg flex-shrink-0"
                                             />
                                        ))}
                                   </div>
                              </div>
                         ))}
                         <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full">Load More</button>
                    </div>
               ) : (
                    // Desktop layout - grid
                    <div>
                         <div className="grid grid-cols-2 gap-4 mb-4 border border-blue-300 rounded-lg p-4">
                              {projects.map((project, index) => (
                                   <div key={index} className="flex">
                                        <div className="w-1/3 bg-gray-800 text-white p-4 flex flex-col justify-end rounded-l-lg">
                                             <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                             <p className="text-sm mb-4">{project.description}</p>
                                             <div className="flex flex-col space-y-2">
                                                  <button className="bg-blue-600 text-white text-xs py-1 px-3 rounded">See Detail</button>
                                                  <button className="bg-white text-gray-800 text-xs py-1 px-3 rounded">Visit Website</button>
                                             </div>
                                        </div>
                                        <div className="w-2/3 p-4 bg-white rounded-r-lg flex items-center justify-center">
                                             <div className="grid grid-cols-2 gap-2">
                                                  {project.appScreenshots.map((screenshot, i) => (
                                                       <img
                                                            key={i}
                                                            src={screenshot || "/placeholder.svg"}
                                                            alt={`${project.title} screenshot ${i + 1}`}
                                                            className={`h-32 w-auto rounded-lg ${i === 2 ? "col-span-2" : ""}`}
                                                       />
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className="grid grid-cols-2 gap-4 border border-blue-300 rounded-lg p-4">
                              {projects.map((project, index) => (
                                   <div key={`desktop-${index}`} className="flex">
                                        <div className="w-1/3 bg-gray-800 text-white p-4 flex flex-col justify-end rounded-l-lg">
                                             <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                             <p className="text-sm mb-4">{project.description}</p>
                                             <div className="flex flex-col space-y-2">
                                                  <button className="bg-blue-600 text-white text-xs py-1 px-3 rounded">See Detail</button>
                                                  <button className="bg-white text-gray-800 text-xs py-1 px-3 rounded">Visit Website</button>
                                             </div>
                                        </div>
                                        <div className="w-2/3 p-4 bg-white rounded-r-lg flex items-center justify-center">
                                             <div className="grid grid-cols-2 gap-2">
                                                  {project.appScreenshots.map((screenshot, i) => (
                                                       <img
                                                            key={i}
                                                            src={screenshot || "/placeholder.svg"}
                                                            alt={`${project.title} screenshot ${i + 1}`}
                                                            className={`h-32 w-auto rounded-lg ${i === 2 ? "col-span-2" : ""}`}
                                                       />
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     )
}

export default ProjectsLayout

