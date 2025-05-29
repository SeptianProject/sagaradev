import React from "react"
import { memories } from "../../assets"
import TextTitle from "../elements/TextTitle"
import Slider from "react-slick"

interface MemoriesLayoutProps {
     isMobile?: boolean
}

const MemoriesLayout: React.FC<MemoriesLayoutProps> = ({ isMobile }) => {
     const sliderSettings = React.useMemo(() => ({
          infinite: false,
          speed: 700,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          className: "w-full",
     }), [])

     return (
          <div className="space-y-10 mt-14 md:mt-0">
               <TextTitle title='git commit -m "Memories"' />
               {isMobile ?
                    <Slider {...sliderSettings}>
                         {memories.map((memory, index) => (
                              <div
                                   key={index}
                                   className="px-1.5 h-64 group relative transition-all duration-300 ease-in-out hover:scale-95 hover:translate-x-[-10px] hover:rotate-2 select-none outline-none border-none"
                              >
                                   <img
                                        src={memory.image}
                                        alt={memory.alt}
                                        className="rounded-xl object-cover w-full h-full grayscale hover:grayscale-0 
                                             transition duration-500 ease-in-out select-none outline-none border-none"
                                   />
                              </div>
                         ))}
                    </Slider>
                    :
                    <div className="grid grid-flow-col grid-cols-8 gap-3 w-full">
                         {memories.map((memory, index) => {
                              const bentoGrid = index === 0 ? 'col-span-3 row-span-2'
                                   : index === 2 ? 'col-span-3' : index === 3 ? 'col-span-3' : 'col-span-2'

                              return (
                                   <img
                                        key={index}
                                        src={memory.image}
                                        alt={memory.alt}
                                        className={`rounded-xl object-cover w-full h-full grayscale hover:grayscale-0 
                                        transition duration-500 
                                        ${bentoGrid}`}
                                   />
                              )
                         })}
                    </div>
               }
          </div>
     )
}

export default MemoriesLayout

