
import Button from '../elements/Button'
import MemberCard from '../fragments/MemberCard'
import Slider from 'react-slick'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { assets } from '../../assets';

interface HeroLayoutProps {
     isMobile: boolean
}

const sagaraMembers = [{
     name: 'Septian Asropik',
     role: 'FE Developer',
     imageUrl: assets.Member1,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}, {
     name: 'Natasya Juliana',
     role: 'UI/UX Designer',
     imageUrl: assets.Member2,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}, {
     name: 'M. Rafli Dwi',
     role: 'BE Developer',
     imageUrl: assets.Member3,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}]

const HeroLayout: React.FC<HeroLayoutProps> = ({ isMobile }) => {
     const sliderSettings = {
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "w-full",
     }

     return (
          <>
               <div className='flex flex-col items-center justify-center gap-y-3'>
                    <h1 className='text-[40px] md:text-7xl font-bold'>SAGARA DEV🌊</h1>
                    <p className='my-1 text-center text-sm md:text-lg max-w-[19rem] md:max-w-[35rem] text-dark/70'>
                         Like the ocean, we are deep in innovation, fluid in execution,
                         and limitless in creativity, turning ideas into impact.
                    </p>
                    <Button
                         title='Explore Sagara'
                         onClick={() => { }}
                         className='w-48'
                    />
               </div>
               <div className='space-y-5'>
                    <h1 className='text-2xl md:text-[40px] font-semibold'>Sagara Team</h1>
                    {isMobile ? (
                         <Slider {...sliderSettings}>
                              {sagaraMembers.map((member, index) => (
                                   <div key={index} className="px-2">
                                        <MemberCard
                                             name={member.name}
                                             role={member.role}
                                             imageUrl={member.imageUrl}
                                             socials={member.socials}
                                        />
                                   </div>
                              ))}
                         </Slider>
                    ) : (
                         <div className="flex gap-x-8">
                              {sagaraMembers.map((member, index) => (
                                   <MemberCard
                                        key={index}
                                        name={member.name}
                                        role={member.role}
                                        imageUrl={member.imageUrl}
                                        socials={member.socials}
                                   />
                              ))}
                         </div>
                    )}
               </div>
          </>
     )
}

export default HeroLayout