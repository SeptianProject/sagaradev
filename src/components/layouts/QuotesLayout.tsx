import type React from "react"
import { assets } from "../../assets"
import TextTitle from "../elements/TextTitle"

interface QuoteProps {
     text: string
     author: string
     role: string
     avatar: string
}

interface QuotesLayoutProps {
     isMobile: boolean
}

const quotes: QuoteProps[] = [
     {
          text: "Coding adalah seni mengubah kafein menjadi solusi🐦👍🏻",
          author: "Septian Aarapik",
          role: "FE Developer",
          avatar: assets.Member1,
     },
     {
          text: "Kata mamah jangan lupa beli mie ayam, gapake ceker, sayurnya yang banyak.",
          author: "Natasya Juliena",
          role: "UI/UX Designer",
          avatar: assets.Member2,
     },
     {
          text: "Jangan malas, kalo malas jadinya kaya saya🤪🤟",
          author: "M. Rafli Dwi S",
          role: "BE Developer",
          avatar: assets.Member3,
     },
]

const QuoteCard: React.FC<QuoteProps> = ({
     author,
     role,
     text,
     avatar
}) => {
     return (
          <div className="max-w-md mx-auto">
               <div className="bg-white rounded-3xl shadow-lg p-6 relative">
                    {/* Quote mark */}
                    <div className="absolute top-6 left-6">
                         <svg
                              className="w-12 h-12 text-gray-800"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                         >
                              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                         </svg>
                    </div>

                    {/* Quote content */}
                    <div className="mt-12 mb-8">
                         <p className="text-gray-600 text-lg ml-4">
                              "{text}"
                         </p>
                    </div>

                    {/* Profile section */}
                    <div className="flex items-center mt-4">
                         {avatar && (
                              <div className="mr-4">
                                   <img
                                        src={avatar}
                                        alt={`${role}'s avatar`}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                                   />
                              </div>
                         )}
                         <div>
                              <h3 className="text-xl font-semibold text-gray-700">{author}</h3>
                              <p className="text-gray-500">{role}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

const QuotesLayout: React.FC<QuotesLayoutProps> = ({ isMobile }) => {
     return (
          <div className="space-y-10 my-20">
               <TextTitle title='console.log("Random Quotes")' />
               <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6`}>
                    {isMobile ? (
                         <QuoteCard {...quotes[0]} />
                    ) : (
                         quotes.map((quote, index) => <QuoteCard key={index} {...quote} />)
                    )}
               </div>
          </div>
     )
}

export default QuotesLayout

