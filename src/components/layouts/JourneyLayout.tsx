import React from 'react'
import Timeline from '../fragments/TimeLine'
import { journeyItems } from '../../assets'

interface JourneyLayoutProps {
     isMobile: boolean
}

const JourneyLayout: React.FC<JourneyLayoutProps> = ({ isMobile }) => {
     return (
          <div id='journeys' className="w-full max-w-[80vw] mx-auto font-sans text-dark min-h-screen mt-10 md:mt-0">
               <h1 className="text-3xl md:text-[40px] font-semibold mb-10 text-center max-w-1/2 mx-auto">Sagara Dev Journey</h1>
               <Timeline items={journeyItems} isMobile={isMobile} />
          </div>
     )
}

export default JourneyLayout