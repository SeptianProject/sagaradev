import React, { useMemo } from 'react';
import Slider from 'react-slick'
import Button from '../elements/Button'
import MemberCard from '../fragments/MemberCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets, sagaraMembers } from '../../assets';

interface HeroLayoutProps {
     isMobile: boolean
}

const HeroLayout: React.FC<HeroLayoutProps> = ({ isMobile }) => {
     const sliderSettings = useMemo(() => ({
          infinite: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "w-full",
     }), [])

     return (
          <>
               <div id='home' className='relative flex flex-col items-center justify-center gap-y-2 mt-5 md:gap-y-4'>
                    <h1 className='text-[50px] md:text-8xl font-bold text-dark'>SAGARA DEV🌊</h1>
                    <p className='mb-2 text-center text-sm md:text-xl max-w-[19rem] md:max-w-[40rem] text-dark/70 md:mb-5'>
                         Like the ocean, we are deep in innovation, fluid in execution,
                         and limitless in creativity, turning ideas into impact.
                    </p>
                    <Button
                         title='Explore Sagara'
                         onClick={() => window.scrollTo({ top: (document.getElementById('teams')?.offsetTop || 0) - 20, behavior: 'smooth' })}
                         className='w-54 h-14 text-xl hover:scale-95 hover:-translate-y-1 transition-transform duration-300'
                    />
                    <div>
                         <img src={assets.Cloud} alt="AkatsukiLogo" className='select-none absolute -right-20 top-44 scale-110 md:right-80 md:top-48 md:scale-150' />
                         <img src={assets.Cloud} alt="AkatsukiLogo" className='select-none absolute -left-16 -top-12 scale-110 md:top-0 md:left-40 md:scale-150' />
                    </div>
               </div>
               <div id='teams' className='space-y-5 mt-20'>
                    <h1 className='text-3xl md:text-[40px] font-semibold'>Sagara Team</h1>
                    {isMobile ? (
                         <Slider {...sliderSettings}>
                              {sagaraMembers.map((member, index) => (
                                   <div key={index} className="px-1">
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