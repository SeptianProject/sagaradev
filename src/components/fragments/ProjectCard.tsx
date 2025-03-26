import React, { memo } from 'react'
import Button from '../elements/Button'

interface ProjectCardProps {
     title: string
     description: string
     image: string
     webUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
     description,
     image,
     title,
     webUrl
}) => {
     const handleVisitWebsite = React.useCallback(() => {
          if (webUrl) {
               window.open(webUrl, '_blank', 'noopener,noreferrer')
          }
     }, [webUrl])

     return (
          <div className='relative h-[24rem] w-full rounded-2xl bg-no-repeat bg-top bg-cover overflow-hidden group'
               style={{
                    backgroundImage: `url(${image})`
               }}>
               <div className="absolute inset-0 bg-gradient-to-r from-[#052026] via-[#15262C]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
               <div className="absolute bottom-7 left-7 space-y-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                    <div className='space-y-1'>
                         <h1 className='text-light text-xl font-bold'>{title}</h1>
                         <p className='text-light/70 text-sm'>{description}</p>
                    </div>
                    <div className='flex gap-x-2'>
                         <Button
                              isProjectBtn
                              isSecondary={false}
                              title='See Detail'
                              onClick={() => { }}
                         />
                         <Button
                              isProjectBtn
                              isSecondary
                              title='Visit Website'
                              onClick={handleVisitWebsite}
                              disabled={!webUrl}
                         />
                    </div>
               </div>
          </div>
     )
}

export default memo(ProjectCard)