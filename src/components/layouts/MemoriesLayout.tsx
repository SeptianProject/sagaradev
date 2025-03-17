import TextTitle from "../elements/TextTitle"
import { assets } from "../../assets"

const memories = [
     { image: assets.Memo1, alt: "ICOM 2023 Award Ceremony", },
     { image: assets.Memo2, alt: "Team Photo", },
     { image: assets.Memo4, alt: "Team with Medals", },
     { image: assets.Memo3, alt: "POLINEMA Award Ceremony", },
     { image: assets.Memo5, alt: "Dinner Celebration", },
]

const MemoriesLayout = () => {
     return (
          <div className="space-y-10">
               <TextTitle title='git commit -m "Memories"' />
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
          </div>
     )
}

export default MemoriesLayout

