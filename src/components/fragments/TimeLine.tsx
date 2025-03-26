import React, { memo } from "react"

interface TimelineItem {
     id: number
     dateRange: string
     title: string
     description: string
     active: boolean
     icon?: string
}

interface TimelineProps {
     items: TimelineItem[]
     isMobile: boolean
}

const DotSeparator = memo(() => (
     <div className="flex flex-col items-center mt-1.5 h-full">
          {Array(10).fill(null).map((_, i) => (
               <div key={i} className="w-0.5 h-2 bg-gray-200 my-1"></div>
          ))}
     </div>
))

const VerticalSeparator = memo(() => (
     <div className="absolute left-1/2 top-28 transform -translate-x-1/2 h-full flex flex-col items-center">
          {Array(25).fill(null).map((_, i) => (
               <div key={i} className="w-1 h-4 bg-gray-200 my-1"></div>
          ))}
     </div>
))

const Timeline: React.FC<TimelineProps> = ({ items, isMobile }) => {
     if (isMobile) {
          return (
               <div className="flex flex-col py-2.5">
                    {items.map((item, index) => (
                         <div key={item.id} className="flex mb-5">
                              <div className="flex flex-col items-center mr-4">
                                   <div className={`w-5 h-5 rounded-full mt-1.5 ${item.active ? "bg-blueAccent" : "bg-grayAccent"}`}></div>
                                   {index < items.length - 1 && <DotSeparator />}
                              </div>
                              <div className="flex-1">
                                   <div className="text-sm text-grayaccbg-grayAccent mb-1.5">{item.dateRange}</div>
                                   <h3 className="text-lg font-semibold my-1.5">
                                        {item.title} {item.icon}
                                   </h3>
                                   <p className="text-sm leading-relaxed text-grayaccbg-grayAccent mt-1.5">{item.description}</p>
                              </div>
                         </div>
                    ))}
               </div>
          )
     }

     return (
          <div className="relative py-10">
               <VerticalSeparator />
               {items.map((item, index) => {
                    const isEven = index % 2 === 0
                    return (
                         <div key={item.id} className={`relative flex items-center mb-16 ${isEven ? "justify-start" : "justify-end"}`}>
                              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                   <div className={`w-8 h-8 rounded-full border-4 border-white ${item.active ? "bg-blueAccent" : "bg-grayAccent"}`}></div>
                              </div>
                              <div className={`w-5/12 ${isEven ? "ml-auto pr-8 text-right" : "mr-auto pl-8"} text-start`}>
                                   <div className="text-sm text-grayaccbg-grayAccent mb-1.5">{item.dateRange}</div>
                                   <h3 className="text-2xl md:text-[40px] font-semibold my-1.5">
                                        {item.title} {item.icon}
                                   </h3>
                                   <p className="text-sm leading-relaxed text-grayaccbg-grayAccent mt-1.5">{item.description}</p>
                              </div>
                         </div>
                    )
               })}
          </div>
     )
}

export default memo(Timeline)

