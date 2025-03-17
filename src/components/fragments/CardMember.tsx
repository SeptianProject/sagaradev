import React from 'react'
import { IconType } from 'react-icons'

interface CardMemberProps {
     name: string
     role: string
     imageUrl: string
     socials?: {
          icon: IconType
          url: string
     }[]
}

const CardMember: React.FC<CardMemberProps> = ({
     name,
     role,
     imageUrl,
     socials
}) => {
     return (
          <div className='relative bg-light h-[28rem] lg:h-[36rem] w-full rounded-2xl p-8 border border-grayAccent/30 overflow-hidden'
               style={{
                    backgroundImage: `${imageUrl}`
               }}>
               <div className='absolute bottom-0 from-[#052026] to-transparent bg-gradient-to-t h-1/2 left-0 w-full' />
               <div className='absolute bottom-10 max-w-[20rem] md:max-w-[22rem] space-y-3'>
                    <div className='space-y-1 pr-5'>
                         <h1 className='text-light text-lg md:text-xl font-bold'>
                              {name} <span className='text-xl md:text-3xl'>•</span> {role}
                         </h1>
                         <p className='text-light text-xs md:text-sm'>
                              Whether you have a question about talents, pricing, portfolio, or anything else, our team....
                         </p>
                    </div>
                    <div className='flex gap-x-2'>
                         {socials?.map((social, index) => (
                              <a key={index} href={social.url}
                                   className='rounded-full border border-light p-[6px] hover:bg-light/10'>
                                   <social.icon className='text-light text-xl' />
                              </a>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default CardMember