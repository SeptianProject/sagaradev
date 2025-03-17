import type React from "react"

interface MemoriesLayoutProps {
     isMobile: boolean
}

const memories = [
     {
          id: 1,
          image: "/placeholder.svg?height=300&width=300",
          alt: "ICOM 2023 Award Ceremony",
     },
     {
          id: 2,
          image: "/placeholder.svg?height=300&width=300",
          alt: "Team Photo",
     },
     {
          id: 3,
          image: "/placeholder.svg?height=300&width=300",
          alt: "POLINEMA Award Ceremony",
     },
     {
          id: 4,
          image: "/placeholder.svg?height=300&width=300",
          alt: "Team with Medals",
     },
     {
          id: 5,
          image: "/placeholder.svg?height=300&width=300",
          alt: "Dinner Celebration",
     },
     {
          id: 6,
          image: "/placeholder.svg?height=300&width=300",
          alt: "Group Photo",
     },
]

const MemoriesLayout: React.FC<MemoriesLayoutProps> = ({ isMobile }) => {
     return (
          <div>
               <h2 className="text-2xl font-bold mb-6">Git Commit -Memories</h2>
               <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "grid-cols-3 gap-6"}`}>
                    {memories.map((memory) => (
                         <div key={memory.id} className="overflow-hidden rounded-lg">
                              <img
                                   src={memory.image || "/placeholder.svg"}
                                   alt={memory.alt}
                                   className="w-full h-auto object-cover aspect-square"
                              />
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default MemoriesLayout

