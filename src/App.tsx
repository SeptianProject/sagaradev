import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HeroLayout from './components/layouts/HeroLayout'
import JourneyLayout from './components/layouts/JourneyLayout'
import ProjectsLayout from './components/layouts/ProjectsLayout'
import MemoriesLayout from './components/layouts/MemoriesLayout'
import QuotesLayout from './components/layouts/QuotesLayout'
import React from 'react'

const App = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className='px-6 md:px-14 bg-light flex flex-col gap-y-10 md:gap-y-20 pb-40'>
      <Navbar isMobile={isMobile} />
      <HeroLayout isMobile={isMobile} />
      <JourneyLayout isMobile={isMobile} />
      <ProjectsLayout />
      <MemoriesLayout />
      <QuotesLayout isMobile={isMobile} />
      <Footer />
    </section>
  )
}

export default App