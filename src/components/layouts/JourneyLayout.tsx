import React from 'react'
import Timeline from '../fragments/TimeLine'

interface JourneyLayoutProps {
     isMobile: boolean
}

const journeyItems = [
     {
          id: 1,
          dateRange: "July 2024 - Feb 2025",
          title: "Digital Pixel Space Creative Interns ✨",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: true,
          icon: "✨",
     },
     {
          id: 2,
          dateRange: "July 2024 - Feb 2025",
          title: "Runner Up ICOMFEST 2025",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: false,
          icon: "🏅",
     },
     {
          id: 3,
          dateRange: "July 2024 - Feb 2025",
          title: "Runner Up Play IT 2024",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: false,
          icon: "🥈",
     },
]

const JourneyLayout: React.FC<JourneyLayoutProps> = ({ isMobile }) => {
     return (
          <div className="w-full max-w-[80vw] mx-auto font-sans text-dark bg-white min-h-screen">
               <h1 className="text-2xl md:text-[40px] font-semibold mb-0 text-center">Sagara Dev Journey</h1>
               <Timeline items={journeyItems} isMobile={isMobile} />
          </div>
     )
}

export default JourneyLayout