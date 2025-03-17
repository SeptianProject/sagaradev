import type React from "react"

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
          text: "Coding adalah seni mengubah kafein menjadi solusi 🫠☕",
          author: "Septian Aarapik",
          role: "FE Developer",
          avatar: "/placeholder.svg?height=50&width=50",
     },
     {
          text: "Kita maneh jangan lupa beli nasi ayam, aplikasi coder sayanya yang banyak.",
          author: "Natasya Juliena",
          role: "UI/UX Designer",
          avatar: "/placeholder.svg?height=50&width=50",
     },
     {
          text: "Jangan malas, kalo males patinya kaya saya 😴💛",
          author: "M. Rafli Dwi S",
          role: "BE Developer",
          avatar: "/placeholder.svg?height=50&width=50",
     },
]

const QuoteCard: React.FC<QuoteProps> = ({ text, author, role, avatar }) => {
     return (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative flex flex-col min-h-[180px]">
               <div className="absolute top-0 right-0 w-px h-full bg-gray-100"></div>
               <div className="text-gray-200 text-7xl font-serif absolute top-4 left-4 leading-none">"</div>
               <p className="text-gray-600 text-sm mt-2 mb-auto pl-4 relative z-10">"{text}"</p>
               <div className="flex items-center mt-4">
                    <div className="mr-3">
                         <img
                              src={avatar || "/placeholder.svg"}
                              alt={author}
                              className="w-10 h-10 rounded-full object-cover border border-gray-200"
                         />
                    </div>
                    <div>
                         <h4 className="font-medium text-gray-800 text-sm">{author}</h4>
                         <p className="text-gray-500 text-xs">{role}</p>
                    </div>
               </div>
          </div>
     )
}

const QuotesLayout: React.FC<QuotesLayoutProps> = ({ isMobile }) => {
     return (
          <div className="my-16">
               <h2 className="text-xl font-bold mb-6 text-gray-800 font-mono">Console.Log('Random Quotes')</h2>

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

